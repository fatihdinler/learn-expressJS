const router = require('express').Router()
let data = require('../data')

router.get('/', (req, res) => {
    res.status(200).json(data)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    const actor = data.find(item => item.id == id)
    if (actor) {
        res.status(200).json(actor)
    } else {
        res.status(404).send('There is no actor id as : ' + id)
    }
})

let next_id = data.length + 1
router.post('/', (req, res, next) => {
    let newActor = req.body
    if (!newActor.isim) {
        next({ statusCode: 404, errorMessage: 'You need to provide a name to create a new actor !' })
    } else if (newActor.isim && !newActor.filmler) {
        next({ statusCode: 404, errorMessage: 'YOu need to provide a list of films for that actor !' })
    } else {
        newActor.id = next_id
        data.push(newActor)
        res.status(200).json(newActor)
    }
})
router.delete('/:id', (req, res, next) => {
    const id = req.params.id
    const actorToBeRemoved = data.find(item => item.id == id)
    if (actorToBeRemoved) {
        data = data.filter(item => item.id != id)
        res.status(204).end()
    } else {
        next({ statusCode: 404, errorMessage: 'There is no actor as you search !' })
    }
})

// router.get('/:actor_name', (req, res) => {
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

module.exports = router
