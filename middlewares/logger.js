const logger = (req, res, next) => {
    console.log(`${new Date().toUTCString()} - ${req.method} - ${req.hostname}`)
    next() // Middleware'i bir sonraki middleware'e yönlendirir.
}

module.exports = logger