// Supports ES6
// import { create, Whatsapp } from 'venom-bot'; 
const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });


  function start(client) {
    var i;
     // Create group (title, participants to add)
     client.createGroup(" قروب", [
      '966563252530@c.us',
      
  ]);
  
}


