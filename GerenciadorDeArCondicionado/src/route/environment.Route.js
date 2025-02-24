const route = require('express').Router()
const environmentController = require('../controller/environment.conttoler')

route.post('/', environmentController.create)
route.get('/', environmentController.findAll)
route.get('/:id', environmentController.findOne)
route.get('/:id/:idDates', environmentController.findOneDate)
route.put('/:id', environmentController.update)
route.delete('/:id', environmentController.excludeOne)

module.exports = route