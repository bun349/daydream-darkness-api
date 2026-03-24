const express = require('express');
const storyRoutes = require('./routes/storyRoutes');
const errorHandler = require('./middleware/errorHandler'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/stories', storyRoutes);

app.use(errorHandler); 

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Bureau API is active on port ${PORT}`);
  });
}

module.exports = app;