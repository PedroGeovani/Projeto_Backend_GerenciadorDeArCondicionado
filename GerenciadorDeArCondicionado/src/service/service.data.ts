import axios from 'axios'
import 'dotenv/config'
import { modelSchedule } from '../models/model.schedule'
import { ScheduleActions } from '../schedule/schedule'
import { database, main } from '../database/conection/databaseConection'

export class DataReception {

  async databaseRequest() {
    
    const scheduleActions = ScheduleActions
    let list: modelSchedule[] = []

    await axios({
      baseURL: process.env.BASE_URL,
      method: 'get',
      url: '/getList',
      responseType: 'json'
    }).then((response) => {
      if (response.status === 200) {
        list = response.data  
        console.log('Acessando agendamentos...')          
      }
    }).catch((error) => {
      console.log(error)
      console.log('Agendamentos inacessíveis...') 
      database.connection.on('disconnected', () => {
        console.log('database desconectado! Reinicie o servidor...')     
      })
    })

    if(list.length > 0){
      console.log('Agendamentos encontrados: ' + list.length)
      scheduleActions(list)
    }
  }
}