const { findAllService } = require("../service/environment.service")
const { scanEnvironments } = require("./executeSchedule")

const menegerSchedule = async() => {
  
  await findAllService()
  .then((response) => {
    const content = response
    scanEnvironments(content,"ON","OFF")
  })
  .catch((error) => {
    console.log("findAllService: "+error)
  })  
}

module.exports = { menegerSchedule }
