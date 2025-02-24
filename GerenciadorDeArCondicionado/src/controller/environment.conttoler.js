const { menegerSchedule } = require('../menegerSchedule/meneger')
const environmentService = require('../service/environment.service')
const mongoose = require('mongoose')

const create = async (req, res) => {
  try {
    const body = req.body
    if (!body.environment) {
      return res.status(400).send({ message: "Undefined environment field" })
    }
    const content = await environmentService.createService(body)
    if (!content) {
      return res.status(404).send({ message: "Error creating environment" })
    }
    res.status(200).send({
      message: "Object created successfully",
      status: 200,
      content: content
    })
  } catch (error) {
    console.log(error)
  }
}

const findAll = async (req, res) => {
  try {
    const environments = await environmentService.findAllService()
    if (environments.length === 0) {
      return res.status(400).send({
        status: 400,
        message: 'No registered environments'
      })
    }
    res.status(200).send({
      message: "Sucess",
      status: 200,
      length: environments.length,
      content: environments
    })
  } catch (error) {
    console.log(error)
  }
}

const findOne = async (req, res) => {
  try {
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: 'Invalid ID' })
    }
    const environments = await environmentService.findOneService(id)

    if (!environments) {
      return res.status(400).send({
        status: 400,
        message: 'No registered environments'
      })
    }

    res.status(200).send({
      message: "Sucess",
      status: 200,
      length: environments.length || 0,
      content: environments
    })
  } catch (error) {
    console.log("Saida de erros")
    console.log(error)
  }
}

const findOneDate = async (req, res) => {
  try {
    const id = req.params.id
    const idDates = req.params.idDates

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: 'Invalid ID' })
    }
    if (!mongoose.Types.ObjectId.isValid(idDates)) {
      return res.status(400).send({ message: 'Invalid ID_DATE' })
    }

    const content = await environmentService.findOneDateService(id, idDates)
    if (!content) {
      return res.status(400).send({
        status: 400,
        message: 'No registered environments'
      })
    }

    res.status(200).send({
      message: "Sucess",
      status: 200,
      length: content.length,
      content: content
    })
  } catch (error) {
    console.log(error)
  }
}

const update = async (req, res) => {
  const id = req.params.id
  const body = req.body

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      status: 400,
      message: "Invalid ID"
    })
  }

  const environment = await environmentService.findOneDateService(id)

  if (!environment) {
    return res.status(400).send({
      status: 400,
      message: 'No registered environments'
    })
  }

  /*
  const existEnvironment = await environmentService.findOneEnvironmentService(body.environment)
    console.log(existEnvironment)
  if (existEnvironment && existEnvironment._id != id) {
    return res.status(400).send({
      status: 400,
      message: 'Environment already exists.'
    })
  }*/

  const content = await environmentService.updateService(id, body)
  res.status(200).send({
    message: 'Update Sucess',
    status: 200,
    content: content
  })
}

const excludeOne = async (req, res) => {
  try {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({
        status: 400,
        message: "Invalid ID"
      })
    }

    const existEnvironment = await environmentService.findOneService(id)
    if (!existEnvironment) {
      return res.status(400).send({
        status: 400,
        message: "Environment already exists"
      })
    }

    const content = environmentService.excludeOneService(id)
      .then((deleteContact) => {
        res.status(200).send({
          message: 'Exclude Sucess',
          status: 200,
          content: deleteContact
        })
      })
      .catch((error) => {
        res.status(400).send({
          message: 'Error deleting document',
          status: 400,
          content: error
        })
      })
  } catch (error) {
    return res.status(400).send({
      status: 500,
      message: error
    })
  }
}

module.exports = { create, findAll, findOne, findOneDate, update, excludeOne }
