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

---

# v1.1.1 (2026-04-27)

| Employee Relational CRUD Enhancement & Stability Patch |

## Catatan

### Relational Data Integration

1. Penambahan relasi Employee dengan **profile, family, dan education** pada layer model Sequelize.
2. Implementasi create employee dengan payload relasi terhubung (nested create).
3. Implementasi update employee dengan payload relasi terhubung (nested update).
4. Penambahan endpoint **Get All Employees** dengan include relasi profile, family, dan education.
5. Implementasi **custom getReport query** untuk kebutuhan laporan berbasis relasi.

### Repository & Query Improvements

6. Penyesuaian repository untuk kebutuhan pencarian dan proses update data relasional.
7. Perbaikan custom select query untuk kebutuhan data agregasi.
8. Penyesuaian return response endpoint employee agar konsisten.

### Model & Module Fixes

9. Penyesuaian wiring model mengikuti format Sequelize module system.
10. Penyesuaian export model berdasarkan module commonJS.
11. Perbaikan import model berdasarkan module commonJS.
12. Perbaikan naming function pada module employee_family.

### Service & Payload Handling

13. Penambahan payload options pada fungsi create untuk mendukung transaksi dan relasi data.
14. Dokumentasi query input dan proses penarikan data.

---

# v1.2.0

| Employee Profile CRUD Standard Initialization |

## Catatan

### Database Migration & Schema

1. Pembuatan migration tabel *employee_profile* menggunakan Sequelize CLI.
2. Implementasi rollback migration dan perbaikan konfigurasi path Sequelize CLI.
3. Penyesuaian skema tabel sesuai requirement tugas:

   * Primary key *tidak auto increment*.
   * Kolom *created_at* dan *updated_at* tidak menggunakan timestamps otomatis.
   * Semua kolom mandatory disesuaikan dengan constraint PostgreSQL.
4. Sinkronisasi model Sequelize dengan struktur tabel database.

### Model Layer

5. Implementasi Sequelize model Employee Profile dengan konfigurasi:

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

8. Implementasi service layer untuk business logic Employee Profile.
9. Penyiapan struktur validasi business rule sebelum akses repository.

### Controller Layer

10. Implementasi Employee Profile Controller:

* Create Employee Profile (POST)
* Get Employee Profile by ID (GET)
* Update Employee Profile (PUT)
* Delete Employee Profile (DELETE)

### Routing Layer

12. Registrasi endpoint REST:

````bash
POST   /api/employee-profiles
GET    /api/employee-profiles/:id
PUT    /api/employee-profiles/:id
DELETE /api/employee-profiles/:id
````

### Success Handling

13. Pembuatan success response terpusat untuk Workflow lifecycle.

### Developer Experience Improvements

14. Penyesuaian body request agar sesuai constraint NOT NULL PostgreSQL.

---

# v1.3.0

| Employee Family CRUD Standard Initialization |

## Catatan

### Database Migration & Schema

1. Pembuatan migration tabel *employee_family* menggunakan Sequelize CLI.
2. Implementasi rollback migration dan perbaikan konfigurasi path Sequelize CLI.
3. Penyesuaian skema tabel sesuai requirement tugas:

   * Primary key *tidak auto increment*.
   * Kolom *created_at* dan *updated_at* tidak menggunakan timestamps otomatis.
   * Semua kolom mandatory disesuaikan dengan constraint PostgreSQL.
   * Kolom *employee_id* merupakan foreign key untuk relasi many to one ke table employee.
4. Sinkronisasi model Sequelize dengan struktur tabel database.

### Model Layer

5. Implementasi Sequelize model Employee Family dengan konfigurasi:

   * timestamps: false.
   * Mapping field snake_case sesuai struktur tabel.
6. Menambahkan relasi tabel *employee* ke *employee_profile*, *employee_family* dan *education*

### Repository Layer

7. Implementasi repository pattern untuk akses data:

   * create()
   * findById()
   * update()
   * delete()

8. Standarisasi pemanggilan Sequelize Model melalui repository sebagai data access abstraction.

### Service Layer

9. Implementasi service layer untuk business logic Employee Family.
10. Penyiapan struktur validasi business rule sebelum akses repository.

### Controller Layer

11. Implementasi Employee Family Controller:

* Create Employee Family (POST)
* Get Employee Family by ID (GET)
* Update Employee Family (PUT)
* Delete Employee Family (DELETE)

### Routing Layer

12. Registrasi endpoint REST:

````bash
POST   /api/employee-famiilies
GET    /api/employee-famiilies/:id
PUT    /api/employee-famiilies/:id
DELETE /api/employee-famiilies/:id
````

### Developer Experience Improvements

13. Penyesuaian body request agar sesuai constraint NOT NULL PostgreSQL.

---

# v1.4.0

| Education CRUD Standard Initialization |

## Catatan

### Database Migration & Schema

1. Pembuatan migration tabel *education* menggunakan Sequelize CLI.
2. Implementasi rollback migration dan perbaikan konfigurasi path Sequelize CLI.
3. Penyesuaian skema tabel sesuai requirement tugas:

   * Primary key *tidak auto increment*.
   * Kolom *created_at* dan *updated_at* tidak menggunakan timestamps otomatis.
   * Semua kolom mandatory disesuaikan dengan constraint PostgreSQL.
   * Kolom *employee_id* merupakan foreign key untuk relasi many to one ke table employee.
4. Sinkronisasi model Sequelize dengan struktur tabel database.

### Model Layer

5. Implementasi Sequelize model Education dengan konfigurasi:

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

8. Implementasi service layer untuk business logic Education.
9. Penyiapan struktur validasi business rule sebelum akses repository.

### Controller Layer

10. Implementasi Education Controller:

* Create Education (POST)
* Get Education by ID (GET)
* Update Education (PUT)
* Delete Education (DELETE)

### Routing Layer

11. Registrasi endpoint REST:

````bash
POST   /api/educations
GET    /api/educations/:id
PUT    /api/educations/:id
DELETE /api/educations/:id
````

### Developer Experience Improvements

12. Penyesuaian body request agar sesuai constraint NOT NULL PostgreSQL.