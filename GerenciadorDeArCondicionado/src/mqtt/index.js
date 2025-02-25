const mqtt = require('mqtt')


const connectMQTT = (environment, action) => {    
  
  const options = {
    protocol: 'mqtt',
    host: '192.168.119.84',
    port: 1884,
    clean: true
  }

  const client = mqtt.connect(options)
  
  const pubTopic = environment
  //const subTopic = "TOPIC/input"

  console.log(client.connected)
  client.on("connect",() => {	     
    console.log("Cliente mqtt conectado.")

   /*  client.subscribe([subTopic], () => { //me^nsagem enviada
      console.log(`Inscrito no tópico ${subTopic}`)
    }) */

    client.publish(pubTopic, action, {qos: 0, retain: true}, (error) => {
      if(error){
        console.error(error)
      }
    })
  })

  /* client.on('message', (subTopico, payload) => { //mensagem recebida
    console.log("Mensagem recebida: "+subTopico, payload.toString)
  }) */
}

module.exports = { connectMQTT }
