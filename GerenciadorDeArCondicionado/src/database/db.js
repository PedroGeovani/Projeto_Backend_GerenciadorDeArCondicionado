const mongoose = require('mongoose')

const url = "mongodb+srv://pedrogeovani:hEYkyfZKqytLlOae@air-conditioning.ezokv.mongodb.net/?retryWrites=true&w=majority&appName=air-conditioning?directConnection=true"

const connectDatabase = () => {
  mongoose.connect( url )
  .then(() => console.log("MongoDb connected"))
  .catch((erro) => {
    console.log(erro)
  })
}

module.exports = connectDatabase
