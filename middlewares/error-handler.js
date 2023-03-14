const errorHandler = (err, req, res, next) => {
    res.status(err.statusCode).json(err)
}

module.exports = errorHandler