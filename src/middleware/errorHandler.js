const errorHandler = (err, req, res, next) => {
  console.error(`[Bureau System Error]: ${err.message}`);

  const statusCode = err.statusCode || 500;
  
  res.status(statusCode).json({
    status: "error",
    error_code: err.code || "INTERNAL_ERROR", 
    message: err.message || "An unexpected error occurred in the Bureau mainframe."
  });
};

module.exports = errorHandler;