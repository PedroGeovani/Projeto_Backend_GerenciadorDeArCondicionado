import schedule from "node-schedule"
import { modelSchedule } from "../models/model.schedule"

const intervalJob = '*/10 * * * * *'

export function ScheduleActions(listSchedule: modelSchedule[]) {

  console.log('Agendamennto iniciado...')

  try {
    for (const item of listSchedule) {

      const startTimeMorning = new Date(item.startTimeMorning)
      const endTimeMorning = new Date(item.endTimeMorning)
      const startTimeAfternoon = new Date(item.startTimeAfternoon)
      const endTimeAfternoon = new Date(item.endTimeAfternoon)
      const startTimeNight = new Date(item.startTimeNight)
      const endTimeNight = new Date(item.endTimeNight)
      const initTimeDate = new Date(startTimeMorning.getFullYear(), startTimeMorning.getMonth(), startTimeMorning.getDate(), 0, 0, 0)
      const endTimeDate = new Date(startTimeMorning.getFullYear(), startTimeMorning.getMonth(), startTimeMorning.getDate(), 23, 59, 59)

      //novo dia - madrigada
      schedule.scheduleJob(item.environment, { start: initTimeDate, end: startTimeMorning, rule: intervalJob }, () => {
        console.log('Executando --> Comando emitido OFF ' + item.environment)
      })
      //manha
      schedule.scheduleJob(item.environment, { start: startTimeMorning, end: endTimeMorning, rule: intervalJob }, () => {
        console.log('Executando --> Comando emitido ON ' + item.environment)
      })
      //intervalo manha - tarde
      schedule.scheduleJob(item.environment, { start: endTimeMorning, end: startTimeAfternoon, rule: intervalJob }, () => {
        console.log('Executando --> Comando emitido OFF ' + item.environment)
      })
      //tarde
      schedule.scheduleJob(item.environment, { start: startTimeAfternoon, end: endTimeAfternoon, rule: intervalJob }, () => {
        console.log('Executando --> Comando emitido ON ' + item.environment)
      })
      //intervalo tarde-noite
      schedule.scheduleJob(item.environment, { start: endTimeAfternoon, end: startTimeNight, rule: intervalJob }, () => {
        console.log('Executando --> Comando emitido OFF ' + item.environment)
      })
      //noite
      schedule.scheduleJob(item.environment, { start: startTimeNight, end: endTimeNight, rule: intervalJob }, () => {
        console.log('Executando --> Comando emitido ON ' + item.environment)
      })
      //fim do dia - noite
      schedule.scheduleJob(item.environment, { start: endTimeNight, end: endTimeDate, rule: intervalJob }, () => {
        console.log('Executando --> Comando emitido OFF ' + item.environment)
      })
    }
  } catch (error) {
    console.log(error)
  }
}
