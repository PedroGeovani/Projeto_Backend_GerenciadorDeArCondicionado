import { database, Environment } from "../conection/databaseConectionRegister"

export const getListEnvironment = async ( _: any, response: any) => {
  try {
    const getEnvironment = await Environment.find({})
    response.status(200).send(getEnvironment)
  } catch(error) {
    response.status(400).send(error)
  }
}

export const getEnvironmentOne = async ( request: any, response: any) => {
  try {
    const getEnvironment = await Environment.find({environment: request.params.environment})
    response.status(200).send(getEnvironment)
  } catch(error) {
    response.status(400).send(error)
  } 
}

export const createEnvironment = async (request: any, response: any) => {
  try {
    const newEnvironment = new Environment({
      environment: request.body.environment,
      months: request.body.months
    })
    await newEnvironment.save()
    response.status(200).send('Criado com sucesso')
  } catch (error) {
    response.status(400).send(error)
  } 
}

export const updateEnvironment = async (request: any, response: any) => {
  try {    
    const update = await Environment.findByIdAndUpdate({_id: request.body._id }, { 
      environment: request.body.environment,
      months: request.body.months
    })  
    response.status(200).send('Atualizado com sucesso')
  } catch (error) {
    response.status(400).send(error)
  }
}

export const excludeEnvironment = async (request: any, response: any) => {
  try {
    const excludeEnvironment = await Environment.findByIdAndDelete({ _id: request.params._id })
    response.status(200).send('Deleteado com sucesso')
  } catch (error) {
    response.status(400).send(error)
  } 
}
