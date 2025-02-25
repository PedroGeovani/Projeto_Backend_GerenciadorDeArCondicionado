const mqtt = require('mqtt')

const host = 'broker.emqx.io'
const port = 1883
const url = `mqtt://${host}:${port}` 

const connectMQTT = () => {    

  const options = {
    username:"IFCEMeneger",   
    password:"123456",
    clientId: "mqttx_9be41f9a",
    reconnectPeriod: 4000,
    clean: true
  }

  const client = mqtt.connect(url, options)
  
  const pubTopic = "TOPIC/output"
  const subTopic = "TOPIC/input"

  console.log(client.connected)
  client.on("connect",() => {	     
    console.log("Cliente mqtt conectado.")

    client.subscribe([subTopic], () => { //me^nsagem enviada
      console.log(`Inscrito no tópico ${subTopic}`)
    })

    client.publish(pubTopic, 'Publicando: Sala 25', {qos: 0, retain: false}, (error) => {
      if(error){
        console.error(error)
      }
    })
  })

  client.on('message', (subTopico, payload) => { //mensagem recebida
    console.log("Mensagem recebida: "+subTopico, payload.toString)
  })
}

module.exports = { connectMQTT }
