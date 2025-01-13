import 'dotenv/config'
import express, { response } from 'express'
import cors from 'cors'
import router from './database/route/route.programming'
import { DataReception } from './service/service.data'

const app = express()
app.use(express.json())
app.use(cors())
app.use('/', router)

const dataReception = new DataReception()
dataReception.databaseRequest()

app.listen(process.env.PORT, () => {
  console.log('Servidor rodando na porta '+process.env.PORT+'...')
})

