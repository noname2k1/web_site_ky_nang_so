import json
import os

import psycopg
from psycopg.rows import dict_row
from psycopg.types.json import Json


DATABASE_URL = os.environ.get(
    "DATABASE_URL",
    "postgres://postgres.yvehoagswqxesmvuekgv:XHpHFEf39MDOFivz@aws-0-us-east-1.pooler.supabase.com:6543/postgres",
).strip()


def get_connection():
    if not DATABASE_URL:
        raise RuntimeError(
            "Chưa cấu hình DATABASE_URL. "
            "Hãy thêm DATABASE_URL vào Environment Variables của Vercel."
        )

    return psycopg.connect(
        DATABASE_URL,
        connect_timeout=10,
        row_factory=dict_row,
    )


def init_db():
    """
    Tạo bảng và index nếu chưa tồn tại.
    Có thể gọi nhiều lần, không làm mất dữ liệu.
    """

    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                CREATE TABLE IF NOT EXISTS results (
                    id BIGSERIAL PRIMARY KEY,

                    submit_time TEXT NOT NULL,

                    name TEXT NOT NULL,

                    department TEXT NOT NULL,

                    question_count INTEGER NOT NULL DEFAULT 0,

                    configured_minutes INTEGER NOT NULL DEFAULT 0,

                    remaining_seconds INTEGER NOT NULL DEFAULT 0,

                    submit_type TEXT NOT NULL DEFAULT '',

                    answered_count INTEGER NOT NULL DEFAULT 0,

                    correct_count INTEGER NOT NULL DEFAULT 0,

                    wrong_count INTEGER NOT NULL DEFAULT 0,

                    percentage DOUBLE PRECISION NOT NULL DEFAULT 0,

                    details JSONB NOT NULL DEFAULT '[]'::jsonb
                )
                """
            )

            cur.execute(
                """
                CREATE INDEX IF NOT EXISTS idx_results_name
                ON results(name)
                """
            )

            cur.execute(
                """
                CREATE INDEX IF NOT EXISTS idx_results_department
                ON results(department)
                """
            )

            cur.execute(
                """
                CREATE INDEX IF NOT EXISTS idx_results_submit_time
                ON results(submit_time)
                """
            )

        conn.commit()


def insert_result(data):
    details = data.get("details", [])

    if not isinstance(details, list):
        details = []

    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                INSERT INTO results (
                    submit_time,
                    name,
                    department,
                    question_count,
                    configured_minutes,
                    remaining_seconds,
                    submit_type,
                    answered_count,
                    correct_count,
                    wrong_count,
                    percentage,
                    details
                )
                VALUES (
                    %s,
                    %s,
                    %s,
                    %s,
                    %s,
                    %s,
                    %s,
                    %s,
                    %s,
                    %s,
                    %s,
                    %s
                )
                RETURNING id
                """,
                (
                    data["submitTime"],
                    data["name"],
                    data["department"],
                    data["questionCount"],
                    data["configuredMinutes"],
                    data["remainingSeconds"],
                    data["submitType"],
                    data["answeredCount"],
                    data["correctCount"],
                    data["wrongCount"],
                    data["percentage"],
                    Json(details),
                ),
            )

            row = cur.fetchone()

        conn.commit()

        return row["id"]


def list_results(search="", department=""):
    sql = """
        SELECT
            id,
            submit_time,
            name,
            department,
            question_count,
            configured_minutes,
            remaining_seconds,
            submit_type,
            answered_count,
            correct_count,
            wrong_count,
            percentage
        FROM results
        WHERE 1 = 1
    """

    params = []

    if search:
        sql += """
            AND (
                name ILIKE %s
                OR department ILIKE %s
            )
        """

        like = f"%{search}%"
        params.extend([like, like])

    if department:
        sql += """
            AND department = %s
        """

        params.append(department)

    sql += """
        ORDER BY id DESC
    """

    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(sql, params)

            return cur.fetchall()


def get_result(result_id):
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                SELECT *
                FROM results
                WHERE id = %s
                """,
                (result_id,),
            )

            row = cur.fetchone()

            if row is None:
                return None

            data = dict(row)

            # PostgreSQL JSONB thường đã được psycopg
            # chuyển thành list/dict.
            # Giữ thêm xử lý dự phòng nếu trả về string.
            if isinstance(data.get("details"), str):
                try:
                    data["details"] = json.loads(data["details"])
                except Exception:
                    data["details"] = []

            if not isinstance(data.get("details"), list):
                data["details"] = []

            return data


def delete_result(result_id):
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                DELETE FROM results
                WHERE id = %s
                """,
                (result_id,),
            )

            deleted = cur.rowcount

        conn.commit()

        return deleted > 0


def delete_results(result_ids):
    if not isinstance(result_ids, list):
        raise TypeError("result_ids phải là list")

    ids = []

    for value in result_ids:
        try:
            ids.append(int(value))
        except (TypeError, ValueError):
            raise ValueError("ID không hợp lệ")

    if not ids:
        return 0

    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                DELETE FROM results
                WHERE id = ANY(%s)
                """,
                (ids,),
            )

            deleted = cur.rowcount

        conn.commit()

        return deleted


def departments():
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                SELECT DISTINCT department
                FROM results
                WHERE department <> ''
                ORDER BY department
                """
            )

            rows = cur.fetchall()

            return [row["department"] for row in rows]


def statistics():
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                SELECT
                    COUNT(*) AS total,

                    COALESCE(
                        SUM(
                            CASE
                                WHEN percentage >= 50
                                THEN 1
                                ELSE 0
                            END
                        ),
                        0
                    ) AS passed,

                    COALESCE(
                        SUM(
                            CASE
                                WHEN percentage < 50
                                THEN 1
                                ELSE 0
                            END
                        ),
                        0
                    ) AS failed,

                    COALESCE(
                        AVG(percentage),
                        0
                    ) AS average

                FROM results
                """
            )

            row = cur.fetchone()

            return dict(row)
