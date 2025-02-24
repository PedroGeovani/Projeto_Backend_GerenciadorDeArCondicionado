const schedule = require('node-schedule')
const environment = require('../models/environment.model')
const { menegerSchedule } = require('./meneger')
/*
content arrey de environment -> [{environment,dates[{date, times[{start_times, end_times}]}]}]
actionON string,
actionOFF string
*/
const scanEnvironments = (content, actionON, actionOFF) => {
  for (let index = 0; index < content.length; index++) {
    scanDates(content[index].environment, content[index].dates, actionON, actionOFF)
  }
}

const scanDates = (environment, dates, actionON, actionOFF) => {
  for (let index = 0; index < dates.length; index++) {
    const date = dates[index].date
    const times = dates[index].times
    executeTimeInterval(environment, date, times, actionOFF)
    executeTimeProgram(environment, times, actionON)
  }
}
/*
environment is string
date is type Date
times is array type date
command is string for OFF
*/
const executeTimeInterval = (environment, date, times, action) => {
  let dayInit = date
  let dayFinal = new Date(date.setHours(23, 59, 59))  
  for (let index = 0; index <= times.length; index++) {
    let init = null
    let final = null    
    if (index === 0) { init = dayInit }
    else { init = times[index - 1].end_time }    
    if (index < times.length) { final = times[index].start_time }
    else { final = dayFinal }    
    executeSchedule(environment, init, final, action)
  }
}

const executeTimeProgram = (environment, times, action) => {
  for (let index = 0; index < times.length; index++) {
    executeSchedule(environment, times[index].start_time, times[index].end_time, action)
  }
}

const executeSchedule = (environment, start, end, action) => {
  schedule.scheduleJob({ start, end, rule: '*/5 * * * * *' }, () => {
    console.log('Emitido ' + action + ' para o ambiente ' + environment)
  })
}

const cancelSchedule = (environment) => {
  schedule.gracefulShutdown()
  .then(() => {
    console.log("Agendamento reiniciado...")
    menegerSchedule()
  })
  .catch((error) => {
    console.log(error)
  })
}

module.exports = {
  executeTimeInterval,
  executeTimeProgram,
  scanEnvironments,
  cancelSchedule
}
