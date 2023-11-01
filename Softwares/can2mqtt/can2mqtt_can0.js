var can = require('socketcan');
var mqtt = require('mqtt');


var channel = can.createRawChannel("can0", true);
var client  = mqtt.connect('mqtt://127.0.0.1');

channel.start();
console.log(" Can Channel Started")

// Start MQTT Connection
client.on('connect', function () {
  client.subscribe('microcontroladores/cano/01', function (err) {
    if (!err) {
      // Add CAN Listenner
      channel.addListener("onMessage", function(msg) {
        console.log(`Receiving from can0 interface: ${JSON.stringify(msg)})`)

          this.mqttPubMsg = {};
          this.mqttPubMsg.tsSec = msg.ts_sec;
          this.mqttPubMsg.tsUsec = msg.ts_usec;
          this.mqttPubMsg.id = msg.id.toString(16);
          this.mqttPubMsg.data = msg.data;

          // Publish Mqtt Message
          client.publish('microcontroladores/cano/01', JSON.stringify(this.mqttPubMsg))
          console.log(`Publishing can receive to MQTT Broker: ${JSON.stringify(this.mqttPubMsg)}`)
      });
    } else {
      console.log(`MQTT Connection Error: ${err}`)
    }
  });
});
