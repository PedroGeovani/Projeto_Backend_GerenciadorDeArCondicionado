const express = require('express')
const route = require('./src/route/environment.Route')
const connectDatabase = require('./src/database/db')
const { menegerSchedule } = require('./src/menegerSchedule/meneger')
const { cancelSchedule } = require('./src/menegerSchedule/executeSchedule')

const app = express()
const port = 4000

connectDatabase()
app.use(express.json())
app.use('/environment', route)
menegerSchedule()

app.listen(port, () => console.log(`Server running on port ${port}!`))