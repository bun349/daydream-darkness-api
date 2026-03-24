const request = require('supertest');
const app = require('../src/app');
const pool = require('../src/data/db');

jest.mock('../src/data/db', () => ({
  query: jest.fn(),
}));

describe('Bureau API Testing', () => {
  afterEach(() => {
    jest.clearAllMocks(); 
  });

  // 1. Test GET (Read All)
  it('GET /api/stories - Harus mengembalikan data anomali dengan format sukses', async () => {
    pool.query.mockResolvedValue({
      rows: [
        { id: 1, title: 'And They All Lived Unhappily Ever After', danger_class: 'A', description: 'Fairy-tale.' }
      ]
    });

    const response = await request(app).get('/api/stories');

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('success');
    expect(response.body.data[0].code).toBe('Qterw-A-1'); 
  });

  // 2. Test POST (Create)
  it('POST /api/stories - Harus berhasil menambahkan anomali baru', async () => {
    const newStoryPayload = { title: 'The Black Cat', danger_class: 'S', description: 'Annihilation level.' };
    
    pool.query.mockResolvedValue({
      rows: [
        { id: 2, title: 'The Black Cat', danger_class: 'S', description: 'Annihilation level.' }
      ]
    });

    const response = await request(app)
      .post('/api/stories')
      .send(newStoryPayload);

    expect(response.statusCode).toBe(201);
    expect(response.body.status).toBe('success');
    expect(response.body.data.code).toBe('Qterw-S-2'); 
    expect(response.body.data.title).toBe('The Black Cat');
  });

  // 3. Test PUT (Update)
  it('PUT /api/stories/:id - Harus berhasil memperbarui data anomali', async () => {
    const updatePayload = { title: 'Chorus of the Sacrificial Lambs', danger_class: 'A', description: 'Updated info' };
    
    pool.query.mockResolvedValue({
      rows: [
        { id: 1, title: 'Chorus of the Sacrificial Lambs', danger_class: 'A', description: 'Updated info' }
      ]
    });

    const response = await request(app)
      .put('/api/stories/1')
      .send(updatePayload);

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('success');
    expect(response.body.data.title).toBe('Chorus of the Sacrificial Lambs');
  });

  // 4. Test DELETE (Delete Sukses)
  it('DELETE /api/stories/:id - Harus berhasil menghapus data anomali', async () => {
    pool.query.mockResolvedValue({
      rows: [{ id: 1 }] 
    });

    const response = await request(app).delete('/api/stories/1');

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('success');
    expect(response.body.message).toBe('Story expunged successfully.');
  });

  // 5. Test Error Handling (Delete Gagal karena ID tidak ada)
  it('DELETE /api/stories/:id - Harus mengembalikan 404 jika data tidak ditemukan', async () => {
    pool.query.mockResolvedValue({
      rows: [] 
    });

    const response = await request(app).delete('/api/stories/999'); 

    expect(response.statusCode).toBe(404);
    expect(response.body.status).toBe('error');
    expect(response.body.message).toBe('Story not found in the Bureau Archive.');
  });
});