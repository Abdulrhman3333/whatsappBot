// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

// this program will send private message for each member of this group which sent "send private message" without delation (you may get banned from whatsapp)
  function start(client) {
    client.onMessage((message) => {
      if (message.body === 'send private message') {
      client
      // Get group Members
      .getGroupMembers(message.from.toString())
      .then((result) => {
        var groupMembers = result.map((x) => {
          // return x["user"];
          client
          .sendText(x["id"]["_serialized"], "اهلا ");
        });
        console.log(result);
        // console.log(groupMembers);
        
      }
      
      )
    }
    });
  }


