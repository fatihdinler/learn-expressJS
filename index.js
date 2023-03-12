const express = require('express')
const data = require('./data')

const server = express()
server.use(express.json())
const port = 3000

server.get('/', (req, res) => {
    res.send('Express')
})

server.get('/actors', (req, res) => {
    res.status(200).json(data)
})

server.get('/actors/:id', (req, res) => {
    // console.log('req.params --> ', req.params)
    // console.log('req.query --> ' , req.query)
    console.log('req.body --> ' , req.body)
    const id = req.params.id
    const actor = data.find(item => item.id == id)
    if(actor) {
        res.status(200).send(actor)
    }
    else {
        res.status(404).send('There is no actor id as : ' + id)
    }
})

// server.get('/actors/:actor_name', (req, res) => {
//     const actorName = req.params.actor_name
//     const films = data.filter(item => item.isim == actorName).map(item => item.filmler)
//     console.log(films)
//     if(films) {
//         res.status(200).send(films)
//     }
//     else {
//         res.status(404).send('404 not found')
//     }
// })

server.listen(port, () => {
    console.log(`Server is started at http://localhost}:${port}` )
})