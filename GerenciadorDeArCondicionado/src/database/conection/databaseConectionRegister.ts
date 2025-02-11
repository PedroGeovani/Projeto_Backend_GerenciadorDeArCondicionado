import mongoose, { Schema } from 'mongoose'
import 'dotenv/config'

export const database = mongoose

const url = process.env.DATABASE_URL
const nameDatabase = process.env.DATABASE_ENVIRONMENT

main().catch(err => console.log(err));

export async function main() {
  try {   
    await database.connect(`${url}`/*,clientOptions*/)
    console.log("Conectado com sucesso ao banco de dados...");
  } catch(error) {
    console.log('Saida de erro: '+ error)
  }
}

interface IEnvironment {
  environment: String,
  months: [Number]
}

const menegerSchema = new Schema<IEnvironment>({
  environment: { type: String, required: true },
  months: [ Number ]    
})

export const Environment = database.model<IEnvironment>(`${nameDatabase}`, menegerSchema)

