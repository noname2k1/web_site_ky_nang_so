HE THONG THI TRAC NGHIEM - PYTHON + SQLITE

1. Dat cac file nay cung thu muc voi index.html hien tai:
   server.py
   database.py
   quests.js (ban da sua de luu ket qua)
   admin/admin.html
   admin/admin.css
   admin/admin.js

2. Cai thu vien (neu may da co Flask):
   python -m pip install flask openpyxl

   SQLite khong can cai rieng, Python co san sqlite3.

3. Chay:
   python server.py

4. Mo trang thi:
   http://127.0.0.1:5000

5. Mo quan ly:
   http://127.0.0.1:5000/admin

6. Du lieu tu dong tao:
   thi_trac_nghiem.db

Moi lan nop bai deu INSERT vao SQLite, khong ghi de ban ghi cu.

7. Xuat Excel:
   Trong man hinh quan ly bam "Xuat Excel".
   File ket_qua_thi.xlsx se duoc tao/cap nhat.

LUU Y:
- index.html va style.css cua ban khong duoc thay doi.
- Hay dung quests.js trong goi nay de thay cho quests.js cu.
- Trang thi phai duoc mo qua http://127.0.0.1:5000, khong mo truc tiep bang file:///.
- Neu chi dung 1 may va khong co Internet, tat ca van hoat dong binh thuong.
