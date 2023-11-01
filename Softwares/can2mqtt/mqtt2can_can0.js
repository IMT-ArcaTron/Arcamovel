var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var mqtt = require('mqtt')

async function playBuzzer() {
  buzzer.writeSync(1)
  await sleep(500);
  buzzer.writeSync(0)
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

var client  = mqtt.connect('mqtt://127.0.0.1')
var buzzer = new Gpio(2, 'out');


client.on('connect', function () {
  client.subscribe('microcontroladores/cano/02', function () {
      console.log(`start`)
  })
})

client.on('message', function (topic, message) {

    var msgReceived = message.toString()
    var msg = JSON.parse(msgReceived)

    //console.log(size)
    console.log(msg)

    if (msg.msg){
      console.log("Buzzer!")
      playBuzzer()
    }
})
