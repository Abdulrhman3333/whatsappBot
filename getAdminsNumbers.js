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
    client.onMessage((message) => {
      if (message.body === '@admins') {
      client
      // Get group admins
      .getGroupAdmins(message.from.toString())
      .then((result) => {
        var groupAdmins = result.map((x) => {
            return x["user"]
        });
        console.log(groupAdmins);
        
      }
      
      )
    }
    });
  }


