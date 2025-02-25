const express = require('express')
const route = require('./src/route/environment.Route')
const connectDatabase = require('./src/database/db')
const { menegerSchedule } = require('./src/menegerSchedule/meneger')
require('dotenv').config()

const app = express()
const port = process.env.PORT_SERVER_BACKEND

connectDatabase()
menegerSchedule()
app.use(express.json())
app.use('/environment', route)

app.listen(port, () => {
  console.log(`Server running on port ${port}!`)
})