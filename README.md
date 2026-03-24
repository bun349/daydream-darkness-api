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

### Endpoint List:
* `GET /api/stories` : Mengambil daftar semua anomali yang terdaftar di database korporasi.
* `POST /api/stories` : Mendaftarkan anomali (Ghost Story) baru.
* `PUT /api/stories/:id` : Memperbarui data dan klasifikasi tingkat bahaya anomali.
* `DELETE /api/stories/:id` : Menghapus catatan anomali dari arsip.

### Format Response:

**Contoh JSON (Success - 200 OK / 201 Created):**
```json
{
  "status": "success",
  "data": {
    "id": 1,
    "code": "Qterw-A-1",
    "title": "And They All Lived Unhappily Ever After",
    "danger_class": "A-Class",
    "description": "Fairy-tale ghost story."
  }
}
