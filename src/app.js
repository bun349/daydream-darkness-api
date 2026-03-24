const express = require('express');
const storyRoutes = require('./routes/storyRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Daftarkan semua routes di sini
app.use('/api/stories', storyRoutes);

app.use(errorHandler);

// Jalankan server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Bureau API is active on port ${PORT}`);
  });
}

// Export app agar nanti bisa dites oleh Jest/Supertest
module.exports = app;