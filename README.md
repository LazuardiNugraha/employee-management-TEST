# Backend Data Kepegawaian

Aplikasi CRUD dasar yang dibuat sebagai bentuk test untuk data kepegawaian.

<p>RDBMS: **PostgreSQL**<br>
Module System: **CommonJS**</p>

Gunakan:
````bash
npm run dev
````

untuk menjalankan server

---

# Release History
## v1.0.0

| Project Initialization & Database Connectivity |

## Catatan

### Project Bootstrap
1. Inisialisasi proyek Express.js dengan struktur layered architecture.
2. Setup struktur folder scalable untuk pengembangan fitur berikutnya.

### Environment Configuration
3. Implementasi environment variables menggunakan dotenv.
4. Konfigurasi koneksi database berbasis .env.

### Database Layer
5. Integrasi Sequelize ORM sebagai data access layer.
6. Implementasi fail-fast database connection saat startup server.
7. Penambahan CLI script untuk pengujian koneksi database.

Gunakan:
````bash
npm run db:test
````

untuk melakukan test koneksi server dan database.

### Developer Experience
8. Penambahan npm scripts: test, db:test.
9. Integrasi nodemon untuk development workflow.

---

# v1.1.0

| Employee CRUD Standard Initialization |

## Catatan

### Database Migration & Schema

1. Pembuatan migration tabel *employee* menggunakan Sequelize CLI.
2. Implementasi rollback migration dan perbaikan konfigurasi path Sequelize CLI.
3. Penyesuaian skema tabel sesuai requirement tugas:

   * Primary key *tidak auto increment*.
   * Kolom *created_at* dan *updated_at* tidak menggunakan timestamps otomatis.
   * Semua kolom mandatory disesuaikan dengan constraint PostgreSQL.
4. Sinkronisasi model Sequelize dengan struktur tabel database.

### Model Layer

5. Implementasi Sequelize model Employee dengan konfigurasi:

   * timestamps: false.
   * Mapping field snake_case sesuai struktur tabel.

### Repository Layer

6. Implementasi repository pattern untuk akses data:

   * create()
   * findById()
   * update()
   * delete()

7. Standarisasi pemanggilan Sequelize Model melalui repository sebagai data access abstraction.

### Service Layer

8. Implementasi service layer untuk business logic Employee.
9. Penyiapan struktur validasi business rule sebelum akses repository.

### Controller Layer

10. Implementasi Employee Controller:

* Create Employee (POST)
* Get Employee by ID (GET)
* Update Employee (PUT)
* Delete Employee (DELETE)

11. Implementasi async error handling menggunakan middleware Express.

### Routing Layer

12. Registrasi endpoint REST:

````bash
POST   /api/employees
GET    /api/employees/:id
PUT    /api/employees/:id
DELETE /api/employees/:id
````

### Error Handling & Logging

13. Aktivasi Sequelize query logging untuk debugging database query.
14. Perbaikan silent failure saat proses insert ke PostgreSQL.

### Developer Experience Improvements

15. Implementasi debugging workflow untuk Express routing lifecycle.
16. Penyesuaian body request agar sesuai constraint NOT NULL PostgreSQL.
17. Stabilitas proses development setelah integrasi nodemon dan hard restart workflow.