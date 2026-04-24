**v1.0.0**

| Project Initialization & Database Connectivity |

RDBMS: **PostgreSQL**
Module System: **CommonJS**

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