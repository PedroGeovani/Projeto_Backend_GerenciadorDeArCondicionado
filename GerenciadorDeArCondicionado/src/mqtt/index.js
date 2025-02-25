const mqtt = require('mqtt')
require('dotenv').config()

const connectMQTT = (environment, action) => {

  const options = {
    protocol: 'mqtt',
    host: process.env.IP_HOST_MQTT,
    port: process.env.PORT_MQTT,
    clean: true
  }

  const client = mqtt.connect(options)

  const pubTopic = environment
  client.on("connect", () => {
    console.log("Cliente mqtt conectado.")

    client.publish(pubTopic, action, { qos: 0, retain: true }, (error) => {
      if (error) {
        console.error(error)
      }
    })
  })

  /*
  //RECEPÇÃO DE MENSAGENS
  const subTopic = "TOPIC/input"
    client.subscribe([subTopic], () => { //me^nsagem enviada
      console.log(`Inscrito no tópico ${subTopic}`)
    })
  
    client.on('message', (subTopico, payload) => { //mensagem recebida
      console.log("Mensagem recebida: "+subTopico, payload.toString)
    }) */

}

module.exports = { connectMQTT }
