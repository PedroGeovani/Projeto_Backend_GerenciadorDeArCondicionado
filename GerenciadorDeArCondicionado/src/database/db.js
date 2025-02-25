const mongoose = require('mongoose')
require('dotenv').config()

const url = process.env.URL_MONGODB_DATABASE
const connectDatabase = () => {
  mongoose.connect( url )
  .then(() => console.log("MongoDb connected"))
  .catch((erro) => {
    console.log("ConnectDatabase: "+erro)
  })
}

module.exports = connectDatabase
