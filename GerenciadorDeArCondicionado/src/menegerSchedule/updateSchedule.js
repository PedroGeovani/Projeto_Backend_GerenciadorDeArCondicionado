const schedule = require('node-schedule')
const menegerSchedule = require('../menegerSchedule/meneger')

const updateSchedule = () => {

  schedule.gracefulShutdown().then(() => {
    console.log("Update schedule.")      
    menegerSchedule()
  }).catch((error) => console.error(error)) 

}

module.exports = updateSchedule