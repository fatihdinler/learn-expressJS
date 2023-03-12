const router = require('express').Router()
const data = require('../film-data')

router.get('/', (req, res) => {
    res.status(200).json(data)
})

router.get('/:year', (req, res) => {
    const year = req.params.year
    const newData = data.find(item => item.Year == year)
    if(newData) {
        res.status(200).json(newData)
    }
    else {
        const error = {message : `There is no movie in ${year}`}
        res.status(404).json(error)
    }
})

module.exports = router