# Daydream Inc. Ghost Stories API 

[![Automasi CI/CD/CS](https://github.com/bun349/daydream-darkness-api/actions/workflows/main.yml/badge.svg)](https://github.com/bun349/daydream-darkness-api/actions/workflows/main.yml)

## 1. Deskripsi Project
**API Manajemen Aset Supranatural (Darkness Registry API)**. 
Sistem *backend* RESTful ini dibuat untuk mencatat dan mengelola entitas anomali (Ghost Stories/Darkness) sebagai aset komersial bagi korporasi **Daydream Inc.** API ini memfasilitasi operasi CRUD untuk mengkatalogkan nama anomali, deskripsi, dan melacak tingkat bahayanya. 

### Teknologi yang Digunakan:
* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL
* **Testing:** Jest, Supertest
* **Infrastruktur:** Docker, Docker Compose
* **DevOps / Automasi:** GitHub Actions

---

## 2. Dokumentasi API

Di bawah ini adalah spesifikasi rute API untuk mengelola aset supranatural (Darkness) di dalam *mainframe* korporasi Daydream Inc.

---

### 1. Mendapatkan Semua Data Anomali
Mengambil daftar semua anomali yang telah ditangkap atau sedang dipantau oleh korporasi.

* **URL:** `/api/stories`
* **Method:** `GET`
* **Success Response:**
  * **Code:** `200 OK`
  * **Content:**
    ```json
    {
      "status": "success",
      "data": [
        {
          "code": "Qterw-A-1",
          "title": "And They All Lived Unhappily Ever After",
          "danger_class": "A-Class",
          "description": "Fairy-tale ghost story."
        },
        {
          "code": "Qterw-C-2",
          "title": "Hellfare Taxi",
          "danger_class": "C-Class",
          "description": "A taxi ghost story that appears when called at night using a specific number. (666666 4444 8282). Anyone who rides this taxi would be cursed without fail."
        },
        {
          "code": "Qterw-C-3",
          "title": "The Day I Died",
          "danger_class": "C-Class",
          "description": "A ghost story that pulls the victim into an unsuccessfully thriller-mystery, making them the sacrificed character.The first witness is always faced with the discovery of their own sacrificial corpse."
        }
      ]
    }
    ```

---

### 2. Mendaftarkan Anomali Baru
Mendaftarkan entitas anomali (Darkness) baru yang baru saja ditemukan untuk dikatalogkan sebagai aset.

* **URL:** `/api/stories`
* **Method:** `POST`
* **Request Body Example:**
  * **Content:**
    ```json
    {
      "title": "Chorus of the Sacrificial Lambs",
      "danger_class": "A",
      "description": "The 'Chorus of the Sacrificial Lambs' consists of one conductor and 13 silver trays that are summoned. The heads of talk show contestants are placed on the silver trays, and their selection process is determined by that day's broadcast corner. Each head fused to a tray produces different phrases and instrument-like sounds, forming an acapella"
    }
    ```
* **Success Response:**
  * **Code:** `201 Created`
  * **Content:**
    ```json
    {
      "status": "success",
      "data": {
        "id": 4,
      "title": "Chorus of the Sacrificial Lambs",
      "danger_class": "A",
      "description": "The 'Chorus of the Sacrificial Lambs' consists of one conductor and 13 silver trays that are summoned. The heads of talk show contestants are placed on the silver trays, and their selection process is determined by that day's broadcast corner. Each head fused to a tray produces different phrases and instrument-like sounds, forming an acapella",
        "code": "Qterw-A-3"
      }
    }
    ```

---

### 3. Memperbarui Data Anomali
Memperbarui informasi, klasifikasi bahaya, atau deskripsi dari anomali yang sudah terdaftar.

* **URL:** `/api/stories/:id`
* **Method:** `PUT`
* **URL Parameters:**
  * `id` (integer): ID unik dari anomali di dalam *database*.
* **Request Body Example:**
  * **Content:**
    ```json
     {
      "title": "Hellfare Taxi",
      "danger_class": "C-Class",
      "description": "A taxi ghost story that appears when called at night using a specific number. (666666 4444 8282). Anyone who rides this taxi would be cursed without fail. Talk to the driver to have less fatal curse"
    }
    ```
* **Success Response:**
  * **Code:** `200 OK`
  * **Content:**
    ```json
    {
      "status": "success",
      "data": {
        "id": 2,
        "title": "Hellfare Taxi",
        "danger_class": "C-Class",
        "description": "A taxi ghost story that appears when called at night using a specific number. (666666 4444 8282). Anyone who rides this taxi would be cursed without fail. Talk to the driver to have less fatal curse",
        "code": "Qterw-C-Class-2"
      }
    }
    ```

---

### 4. Menghapus Data Anomali
Menghapus catatan anomali dari arsip (biasanya dilakukan saat prosedur Annihilation-Sanctioned selesai dan aset sudah tidak menguntungkan).

* **URL:** `/api/stories/:id`
* **Method:** `DELETE`
* **URL Parameters:**
  * `id` (integer): ID unik dari anomali di dalam *database*.
* **Success Response:**
  * **Code:** `200 OK`
  * **Content:**
    ```json
    {
      "status": "success",
      "message": "Story expunged successfully."
    }
    ```

---

### Format Error Global
Jika terjadi kesalahan pada *endpoint* mana pun (misalnya data tidak ditemukan atau format salah), API akan mengembalikan respons berikut:

* **Error Response:**
  * **Code:** `404 Not Found` / `500 Internal Server Error`
  * **Content:**
    ```json
    {
      "status": "error",
      "error_code": "INTERNAL_ERROR",
      "message": "Story not found in the Bureau Archive."
    }
    ```
## 3. Panduan Instalasi dan Konfigurasi

Sistem ini dapat dijalankan menggunakan kontainer Docker atau secara lokal untuk keperluan *debugging* tingkat lanjut.

### A. Instalasi Menggunakan Docker
Aplikasi ini telah di-*containerization* sepenuhnya dan terintegrasi otomatis dengan database PostgreSQL menggunakan Docker Compose.

**Langkah-langkah menjalankan aplikasi:**
1. Pastikan **Docker Desktop** sudah menyala di sistem Anda.
2. Buka terminal di folder *root* proyek.
3. Jalankan perintah berikut untuk mem-*build* image dan menyalakan *container* di *background*:
   ```bash
   docker-compose up --build -d
4. Mainframe API siap diakses melalui URL: http://localhost:3001/api/stories
5. Untuk mematikan sistem, gunakan perintah:
   ```bash
   docker-compose down

**Informasi Port yang Digunakan:**
* Service API (Node.js): Menggunakan Host Port `3001` yang terhubung ke Container Port `3000`.
* Service Database (PostgreSQL): Menggunakan Host Port `5432` yang terhubung ke Container Port `5432`.
 
### B. Instalasi Lokal

Jika Anda ingin menjalankan dan menguji sistem ini secara manual di mesin lokal Anda tanpa bantuan kontainer:

**Prasyarat**
* Node.js (versi 18 atau lebih baru)
* PostgreSQL (terinstal dan berjalan di mesin lokal)

**Langkah-langkah:**
1. Buka terminal di folder proyek dan jalankan instalasi dependencies:
   ```bash
   npm install
2. Buka pgAdmin atau terminal psql Anda, lalu buat database baru bernama `bureau_db`.
3. Jalankan script SQL pembuatan tabel yang ada di dalam file db/init.sql ke dalam database bureau_db tersebut.
4. Buat file .env di root folder proyek dan sesuaikan kredensialnya dengan PostgreSQL lokal Anda:
   ```javascript
   PORT=300
   DB_HOST=db-postgres
   DB_USER=bureau_admin
   DB_PASSWORD=secretpassword
   DB_NAME=bureau_db
6. Jalankan server atau Test
      ```bash
   npm start
   npm test
8. Aplikasi akan berjalan dan dapat diakses melalui URL: http://localhost:3000/api/stories

## 4. Alur Kerja Git
Pengembangan API ini menggunakan pendekatan Feature Branch Flow dan mematuhi format Conventional Commits untuk mempermudah pelacakan riwayat kode.

**Branch yang Digunakan:**
* `main` : Branch produksi utama (stabil).
* `develop` : Branch integrasi untuk pengujian sebelum rilis.
* `feat/setup-crud-api` : Branch fitur tempat pengembangan utama operasi CRUD API dilakukan.

**Conventional Commits:**
* `feat` :	Menambah fitur utama (CRUD) atau logika bisnis baru untuk aset Darkness.
* `fix`	: Memperbaiki kesalahan logika, endpoint yang tidak jalan, atau variabel yang belum terdefinisi.
* `docs`	: Mengubah atau melengkapi file README.md dan dokumentasi kode (comments).
* `ci`	: Mengonfigurasi otomatisasi di GitHub Actions (CI/CD/CS) agar pipeline berjalan hijau.
* `chore` :	Menyiapkan infrastruktur dasar seperti Docker, Docker Compose, atau inisialisasi database.

## 5. Status Automasi
Proyek ini telah dikonfigurasi dengan otomatisasi pipeline CI/CD/CS melalui file .github/workflows/main.yml yang berjalan otomatis setiap kali ada proses Push atau Pull Request.
* **Continuous Integration (CI)**: Menggunakan framework Jest dan Supertest (dengan teknik Database Mocking) untuk menguji otomatis seluruh operasi CRUD guna memastikan logika aplikasi berjalan tanpa bug.
* **Continuous Security (CS)**: Menjalankan pemindaian npm audit --audit-level=high untuk mendeteksi kerentanan keamanan pada dependencies Node.js.
* **Continuous Delivery (CD)**: Secara otomatis mem-build Docker Image dari kode terbaru dan mengunggahnya ke GitHub Container Registry (GHCR).
