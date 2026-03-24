# Daydream Inc. Ghost Stories API 

[![Automasi CI/CS](https://github.com/bun349/daydream-darkness-api/actions/workflows/main.yml/badge.svg)](https://github.com/bun349/daydream-darkness-api/actions/workflows/main.yml)

## 1. Deskripsi Project
**API Manajemen Entitas Supernatural (Anomaly Registry API)**. 
Sistem *backend* berstandar RESTful ini dirancang untuk Biro Manajemen Bencana Supernatural (Daydream Inc.) guna mencatat, melacak, dan mengelola entitas anomali (Ghost Stories) beserta tingkat bahayanya. *(Proyek ini sangat terinspirasi oleh lore dari light novel "Got Dropped into a Ghost Story, Still Gotta Work")*.

---

## 2. Dokumentasi API

### Endpoint List:
* `GET /api/stories` : Mengambil daftar semua anomali yang terdaftar di database biro.
* `POST /api/stories` : Mendaftarkan anomali (Ghost Story) baru.
* `PUT /api/stories/:id` : Memperbarui data dan klasifikasi tingkat bahaya anomali.
* `DELETE /api/stories/:id` : Menghapus catatan anomali dari arsip (Annihilation-Sanctioned).

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
