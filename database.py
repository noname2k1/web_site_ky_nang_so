from pathlib import Path
import sqlite3
import json
import os
import shutil

BASE_DIR = Path(__file__).resolve().parent

if os.environ.get("VERCEL"):
    DB_FILE = Path("/tmp/thi_trac_nghiem.db")
    SOURCE_DB_FILE = BASE_DIR / "thi_trac_nghiem.db"
else:
    DB_FILE = BASE_DIR / "thi_trac_nghiem.db"
    SOURCE_DB_FILE = None


def get_connection():
    conn = sqlite3.connect(str(DB_FILE))
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    return conn


def init_db():
    if SOURCE_DB_FILE is not None and not DB_FILE.exists():
        if SOURCE_DB_FILE.exists():
            shutil.copy2(SOURCE_DB_FILE, DB_FILE)
    DB_FILE.parent.mkdir(parents=True, exist_ok=True)
    with get_connection() as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS results (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                submit_time TEXT NOT NULL,
                name TEXT NOT NULL,
                department TEXT NOT NULL,
                question_count INTEGER NOT NULL,
                configured_minutes INTEGER NOT NULL DEFAULT 0,
                remaining_seconds INTEGER NOT NULL DEFAULT 0,
                submit_type TEXT NOT NULL,
                answered_count INTEGER NOT NULL DEFAULT 0,
                correct_count INTEGER NOT NULL DEFAULT 0,
                wrong_count INTEGER NOT NULL DEFAULT 0,
                percentage REAL NOT NULL DEFAULT 0,
                details TEXT NOT NULL DEFAULT '[]'
            )
        """)
        conn.execute("CREATE INDEX IF NOT EXISTS idx_results_name ON results(name)")
        conn.execute(
            "CREATE INDEX IF NOT EXISTS idx_results_department ON results(department)"
        )
        conn.execute(
            "CREATE INDEX IF NOT EXISTS idx_results_submit_time ON results(submit_time)"
        )
        conn.commit()


def insert_result(data):
    details = data.get("details", [])
    if not isinstance(details, list):
        details = []

    with get_connection() as conn:
        cur = conn.execute(
            """
            INSERT INTO results (
                submit_time, name, department, question_count,
                configured_minutes, remaining_seconds, submit_type,
                answered_count, correct_count, wrong_count, percentage, details
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
                json.dumps(details, ensure_ascii=False),
            ),
        )
        conn.commit()
        return cur.lastrowid


def list_results(search="", department=""):
    sql = """
        SELECT id, submit_time, name, department, question_count,
               configured_minutes, remaining_seconds, submit_type,
               answered_count, correct_count, wrong_count, percentage
        FROM results
        WHERE 1=1
    """
    params = []
    if search:
        sql += " AND (name LIKE ? OR department LIKE ?)"
        like = f"%{search}%"
        params.extend([like, like])
    if department:
        sql += " AND department = ?"
        params.append(department)
    sql += " ORDER BY id DESC"

    with get_connection() as conn:
        return [dict(row) for row in conn.execute(sql, params).fetchall()]


def get_result(result_id):
    with get_connection() as conn:
        row = conn.execute(
            "SELECT * FROM results WHERE id = ?", (result_id,)
        ).fetchone()
        if row is None:
            return None
        data = dict(row)
        try:
            data["details"] = json.loads(data["details"])
        except Exception:
            data["details"] = []
        return data


def delete_result(result_id):
    with get_connection() as conn:
        cur = conn.execute("DELETE FROM results WHERE id = ?", (result_id,))
        conn.commit()
        return cur.rowcount > 0


def delete_results(result_ids):
    ids = [int(x) for x in result_ids]
    if not ids:
        return 0
    placeholders = ",".join("?" for _ in ids)
    with get_connection() as conn:
        cur = conn.execute(f"DELETE FROM results WHERE id IN ({placeholders})", ids)
        conn.commit()
        return cur.rowcount


def departments():
    with get_connection() as conn:
        rows = conn.execute("""
            SELECT DISTINCT department FROM results
            WHERE department <> '' ORDER BY department COLLATE NOCASE
        """).fetchall()
        return [row["department"] for row in rows]


def statistics():
    with get_connection() as conn:
        rows = conn.execute("""
            SELECT percentage
            FROM results
        """).fetchall()

    total = len(rows)
    passed = sum(1 for row in rows if float(row["percentage"] or 0) >= 50)
    failed = total - passed

    average = (
        sum(float(row["percentage"] or 0) for row in rows) / total if total > 0 else 0
    )

    return {
        "total": total,
        "passed": passed,
        "failed": failed,
        "average": round(average, 2),
    }
