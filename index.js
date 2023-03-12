const express = require('express')
const actors = require('./routers/actors')
const films = require('./routers/films')
const server = express()
const port = 3000

server.use(express.json())
server.use('/actors', actors)
server.use('/films', films)

server.get('/', (req, res) => {
    res.send('Express')
})

server.listen(port, () => {
    console.log(`Server is started at http://localhost}:${port}` )
})