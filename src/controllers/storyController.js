const pool = require('../data/db');

const formatCode = (dangerClass, id) => `Qterw-${dangerClass}-${id}`;

// Tambahkan parameter 'next'
exports.getAllStories = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM darkness ORDER BY id ASC');
    const formattedData = result.rows.map(row => ({
      code: formatCode(row.danger_class, row.id),
      title: row.title,
      danger_class: `${row.danger_class}-Class`,
      description: row.description
    }));
    res.json({ status: "success", data: formattedData });
  } catch (err) {
    // Lempar error ke middleware
    next(err); 
  }
};

// Tambahkan parameter 'next'
exports.createStory = async (req, res, next) => {
  const { title, danger_class, description } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO darkness (title, danger_class, description) VALUES ($1, $2, $3) RETURNING *',
      [title, danger_class, description]
    );
    const newStory = result.rows[0];
    res.status(201).json({
      status: "success",
      data: { ...newStory, code: formatCode(newStory.danger_class, newStory.id) }
    });
  } catch (err) {
    // Lempar error ke middleware
    next(err);
  }
};