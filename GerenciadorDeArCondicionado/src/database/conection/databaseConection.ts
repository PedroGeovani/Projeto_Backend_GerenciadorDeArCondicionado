import mongoose, { Schema } from 'mongoose'
import 'dotenv/config'

export const database = mongoose

const url = process.env.DATABASE_URL
const nameDatabase = process.env.DATABASE_NAME

main().catch(err => console.log(err));

export async function main() {
  try {   
    await database.connect(`${url}`/*,clientOptions*/)
    console.log("Conectado com sucesso ao banco de dados...");
  } catch(error) {
    console.log('Saida de erro: '+ error)
  }
}

interface IMeneger {
  environment: String, 
  startTimeMorning: String,
  endTimeMorning: String,
  startTimeAfternoon: String,
  endTimeAfternoon: String,
  startTimeNight: String,
  endTimeNight: String  
}

const menegerSchema = new Schema<IMeneger>({
  environment: { type: String, required: true },
  startTimeMorning: String,
  endTimeMorning: String,
  startTimeAfternoon: String,
  endTimeAfternoon: String,
  startTimeNight: String,
  endTimeNight: String  
})

export const Meneger = database.model<IMeneger>(`${nameDatabase}`, menegerSchema)

