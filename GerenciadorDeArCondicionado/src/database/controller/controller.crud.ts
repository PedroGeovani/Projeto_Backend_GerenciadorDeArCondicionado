import { database, Meneger } from "../conection/databaseConection"

export const getListMeneger = async ( _: any, response: any) => {
  try {
    const getMeneger = await Meneger.find({})
    response.status(200).send(getMeneger)
  } catch(error) {
    response.status(400).send(error)
  }
}

export const getMenegerByEnvoronment = async ( request: any, response: any) => {
  try {
    const getMeneger = await Meneger.find({environment: request.params.environment})
    response.status(200).send(getMeneger)
  } catch(error) {
    response.status(400).send(error)
  } 
}

export const createMeneger = async (request: any, response: any) => {
  try {
    const newMeneger = new Meneger({
      environment:        request.body.environment,
      startTimeMorning:   request.body.startTimeMorning,
      endTimeMorning:     request.body.endTimeMorning,
      startTimeAfternoon: request.body.startTimeAfternoon,
      endTimeAfternoon:   request.body.endTimeAfternoon,
      startTimeNight:     request.body.startTimeNight,
      endTimeNight:       request.body.endTimeNight
    })
    await newMeneger.save()
    response.status(200).send('Criado com sucesso')
  } catch (error) {
    response.status(400).send(error)
  } 
}

export const updateMeneger = async (request: any, response: any) => {
  try {    
    const update = await Meneger.findByIdAndUpdate({_id: request.body._id }, { 
      environment:        request.body.environment,
      startTimeMorning:   request.body.startTimeMorning,
      endTimeMorning:     request.body.endTimeMorning,
      startTimeAfternoon: request.body.startTimeAfternoon,
      endTimeAfternoon:   request.body.endTimeAfternoon,
      startTimeNight:     request.body.startTimeNight,
      endTimeNight:       request.body.endTimeNight
     })  
    response.status(200).send('Atualizado com sucesso')
  } catch (error) {
    response.status(400).send(error)
  }
}

export const excludeMeneger = async (request: any, response: any) => {
  try {
    const excludeMeneger = await Meneger.findByIdAndDelete({ _id: request.params._id })
    response.status(200).send('Deleteado com sucesso')
  } catch (error) {
    response.status(400).send(error)
  } 
}
