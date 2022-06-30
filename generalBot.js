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
    phone = message.body.slice(-12)+"@c.us";
      // Get group admins
      client
      .getGroupAdmins(message.from.toString())
      .then((result) => {
        var groupAdmins = result.map((x) => {
          return x["user"]
        });

        if( groupAdmins.includes(message.sender.id.slice(0,12)) ){
            if(message.body.startsWith("promote ")){
               promoteParticipants(message,client,phone)
            }
            else if(message.body.startsWith("remove ")){
               removeParticipants(message,client,phone)
            }
            else if(message.body.startsWith("add ")){
              addParticipant(message,client,phone)
           }
        }
      }
      )

  });
}

function promoteParticipants(message,client,phone){
    client.promoteParticipant(message.from, phone);
  }

  function removeParticipants(message,client,phone){
    client.removeParticipant(message.from, phone);
  }

  function addParticipant(message,client,phone){
    client.addParticipant(message.from, phone);
  }