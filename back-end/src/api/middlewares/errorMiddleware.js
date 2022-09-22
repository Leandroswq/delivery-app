const errorFunc = (err, _req, res, _next) => {
    if (err.status) return res.status(err.status).json({ message: err.message });

    res.status(500).json({ message: err.message });
  };
module.exports = errorFunc;

// const error = new Error('Login Errado')
// error.status = 404
// throw error