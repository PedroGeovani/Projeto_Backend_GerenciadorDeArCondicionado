import { DataReception } from "../../service/service.data"
import { database, Meneger } from "../conection/databaseConection"

export const getListMeneger = async (_: any, response: any) => {
  try {
    const getMeneger = await Meneger.find({})
    console.log('ACCESS_GETLISTMENEGER')
    response.status(200).send(getMeneger)
  } catch (error) {
    response.status(400).send(error)
  }
}

export const getMenegerByEnvironment = async (request: any, response: any) => {
  try {
    const getMeneger = await Meneger.find({ environment: request.params.environment })
    console.log('ACCESS_GETLISTMENEGERGETMENEGERBYENVIRONMENT')
    response.status(200).send(getMeneger)
  } catch (error) {
    response.status(400).send(error)
  }
}

export const getMenegerByEnvironmentAndDate = async (request: any, response: any) => {
  try {
    const getMeneger = await Meneger.find({ environment: request.params.environment, date: request.params.date })
    console.log('ACCESS_GETLISTMENEGERGETMENEGERBYENVIRONMENTANDDATE')
    response.status(200).send(getMeneger)
  } catch (error) {
    response.status(400).send(error)
  }
}

export const createMeneger = async (request: any, response: any) => {  
  try {
    const newMeneger = new Meneger({
      environment: request.body.environment,
      date: request.body.date,
      startTimeMorning: request.body.startTimeMorning,
      endTimeMorning: request.body.endTimeMorning,
      startTimeAfternoon: request.body.startTimeAfternoon,
      endTimeAfternoon: request.body.endTimeAfternoon,
      startTimeNight: request.body.startTimeNight,
      endTimeNight: request.body.endTimeNight
    })
    await newMeneger.save()
    console.log('ACCESS_CREATEMENEGER')     
    const dataReception = new DataReception()
    dataReception.databaseRequest()
    response.status(200).send('Sucess')
  } catch (error) {
    response.status(400).send(error)
  }
}

export const updateMeneger = async (request: any, response: any) => {
  try {
    const update = await Meneger.findByIdAndUpdate({ _id: request.body._id }, {
      environment: request.body.environment,
      date: request.body.date,
      startTimeMorning: request.body.startTimeMorning,
      endTimeMorning: request.body.endTimeMorning,
      startTimeAfternoon: request.body.startTimeAfternoon,
      endTimeAfternoon: request.body.endTimeAfternoon,
      startTimeNight: request.body.startTimeNight,
      endTimeNight: request.body.endTimeNight
    })
    console.log('ACCESS_UPDATEMENEGER')
    response.status(200).send('Sucess')
  } catch (error) {
    response.status(400).send(error)
  }
}

export const excludeMeneger = async (request: any, response: any) => {
  try {
    const excludeMeneger = await Meneger.findByIdAndDelete({ _id: request.params._id })
    console.log('ACCESS_EXCLUDEMENEGER')
    response.status(200).send('Sucess')
  } catch (error) {
    response.status(400).send(error)
  }
}
