const schedule = require('node-schedule')
const menegerSchedule = require('../menegerSchedule/meneger')
const { findAllService } = require('../service/environment.service')
const { scanEnvironments } = require('./executeSchedule')

const updateSchedule = () => {

  const teste = schedule.gracefulShutdown()
  .then(async () => {
    console.log("Update server...")
    await findAllService()
      .then((response) => {
        const content = response
        scanEnvironments(content, "ON", "OFF")
      })
      .catch((error) => {
        console.log("GracefulShutdown: " + error)
      })
  })
  .catch((error) => console.log("UpdateSchedule: " + error))
}

module.exports = updateSchedule