const environment = require('../models/environment.model')

const createService = (body) => environment.create(body)
const findAllService = () => environment.find()
const findOneService = (id) => environment.findById(id)
const findOneDateService = (id, idDates) => environment.findById({ _id: id, "dates._id": idDates })
const updateService = (id, body) => environment.findOneAndUpdate({ _id: id }, {environment: body.environment, dates: body.dates}, {new: true})
const findOneEnvironmentService = (name) => environment.findOne({ environment: name})
const excludeOneService = (id) => environment.findByIdAndDelete(id)


module.exports = {
  createService,
  findAllService,
  findOneService,
  findOneDateService,
  updateService,
  findOneEnvironmentService,
  excludeOneService
}