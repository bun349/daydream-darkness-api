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
        }
      ]
    }
    ```

---

### 2. Mendaftarkan Anomali Baru
Mendaftarkan entitas anomali (Darkness) baru yang baru saja ditemukan untuk dikatalogkan sebagai aset.

* **URL:** `/api/stories`
* **Method:** `POST`
* **Request Body (JSON):**
  * `title` (string): Nama entitas anomali.
  * `danger_class` (string): Klasifikasi tingkat bahaya (misal: S, A, B, C).
  * `description` (string): Detail atau peringatan terkait entitas.
* **Success Response:**
  * **Code:** `201 Created`
  * **Content:**
    ```json
    {
      "status": "success",
      "data": {
        "id": 2,
        "title": "The Black Cat",
        "danger_class": "S",
        "description": "Annihilation level.",
        "code": "Qterw-S-2"
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
* **Request Body (JSON):**
  * `title` (string): Nama entitas anomali yang baru.
  * `danger_class` (string): Klasifikasi tingkat bahaya yang baru.
  * `description` (string): Deskripsi yang diperbarui.
* **Success Response:**
  * **Code:** `200 OK`
  * **Content:**
    ```json
    {
      "status": "success",
      "data": {
        "id": 1,
        "title": "Chorus of the Sacrificial Lambs",
        "danger_class": "A",
        "description": "Updated info regarding the sacrificial protocol.",
        "code": "Qterw-A-1"
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
