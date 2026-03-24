const pool = require('../data/db');

const formatCode = (dangerClass, id) => `Qterw-${dangerClass}-${id}`;

// READ (GET) - Mendapatkan semua cerita anomali
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
    next(err); 
  }
};

// CREATE (POST) - Menambahkan cerita anomali baru
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
    next(err);
  }
};

// UPDATE (PUT) - Memperbarui status/cerita anomali
exports.updateStory = async (req, res, next) => {
  const { id } = req.params; // Mengambil ID dari URL
  const { title, danger_class, description } = req.body;
  
  try {
    const result = await pool.query(
      'UPDATE darkness SET title = $1, danger_class = $2, description = $3 WHERE id = $4 RETURNING *',
      [title, danger_class, description, id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ status: "error", message: "Story not found in the Bureau Archive." });
    }
    
    const updatedStory = result.rows[0];
    res.status(200).json({
      status: "success",
      data: { ...updatedStory, code: formatCode(updatedStory.danger_class, updatedStory.id) }
    });
  } catch (err) {
    next(err);
  }
};

// DELETE - Menghapus catatan anomali 
exports.deleteStory = async (req, res, next) => {
  const { id } = req.params;
  
  try {
    const result = await pool.query('DELETE FROM darkness WHERE id = $1 RETURNING *', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ status: "error", message: "Story not found in the Bureau Archive." });
    }
    
    res.status(200).json({ status: "success", message: "Story expunged successfully." });
  } catch (err) {
    next(err);
  }
};