const request = require('supertest');
const app = require('../src/app');
const pool = require('../src/data/db');

// Memalsukan (Mock) koneksi database agar tidak error saat testing di GitHub
jest.mock('../src/data/db', () => ({
  query: jest.fn(),
}));

describe('Bureau API Testing', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('GET /api/stories - Harus mengembalikan data anomali dengan format sukses', async () => {
    // 1. Siapkan data palsu seolah-olah dari database
    pool.query.mockResolvedValue({
      rows: [
        { id: 1, title: 'And They All Lived Unhappily Ever After', danger_class: 'A', description: 'Fairy-tale.' }
      ]
    });

    // 2. Tembak endpoint-nya
    const response = await request(app).get('/api/stories');

    // 3. Pastikan hasilnya sesuai harapan (Ekspektasi)
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('success');
    expect(response.body.data[0].code).toBe('Qterw-A-1'); // Memastikan format Smart ID bekerja
  });
});