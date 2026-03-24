const errorHandler = (err, req, res, next) => {
  // Catat error di console (berguna saat debugging di terminal Docker)
  console.error(`[Bureau System Error]: ${err.message}`);

  // Tentukan status code, default ke 500 (Internal Server Error) kalau tidak ada
  const statusCode = err.statusCode || 500;
  
  // Format response JSON yang konsisten
  res.status(statusCode).json({
    status: "error",
    error_code: err.code || "INTERNAL_ERROR", // Bisa menangkap kode error dari Postgres
    message: err.message || "An unexpected error occurred in the Bureau mainframe."
  });
};

module.exports = errorHandler;