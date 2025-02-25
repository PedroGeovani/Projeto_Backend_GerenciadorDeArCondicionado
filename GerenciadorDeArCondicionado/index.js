const express = require('express')
const route = require('./src/route/environment.Route')
const connectDatabase = require('./src/database/db')
const { menegerSchedule } = require('./src/menegerSchedule/meneger')
const { connectMQTT } = require('./src/mqtt')

const app = express()
const port = 4000

connectDatabase()
menegerSchedule()
app.use(express.json())
app.use('/environment', route)
//connectMQTT()

app.listen(port, () => {
  console.log(`Server running on port ${port}!`)
})