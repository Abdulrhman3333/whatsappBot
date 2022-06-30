// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create({
    session: 'session-name', //name of session
    multidevice: false // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

// turn on this program, when you get any message from any group you will get the id of the group

function start(client) {
  client.onMessage((message) => {
        
      client
        console.log("========================================="); //return object success
        console.log('message: ', message.body); //return object success
        console.log('group Id: ', message.from); //return object success
        console.log("========================================="); //return object success

        console.log('\n');
        console.log('\n');
  });
}
