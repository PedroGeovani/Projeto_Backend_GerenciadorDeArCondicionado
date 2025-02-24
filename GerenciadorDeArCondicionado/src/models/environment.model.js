const mongoose = require('mongoose')

const timeSchema = new mongoose.Schema({
  start_time: {type: Date},
  end_time: {type: Date}
})

const datesSchema = new mongoose.Schema({
  date: {type: Date},
  times: [timeSchema]
})

const environmentSchema = new mongoose.Schema({
  environment: {type: String, required: true, unique: true},
  dates: [datesSchema]
})

const environment = mongoose.model('testes', environmentSchema)

module.exports = environment