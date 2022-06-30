// Supports ES6
// import { create, Whatsapp } from 'venom-bot';+

const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'شكرا') {
      client
      // Get group admins
      .getGroupAdmins(message.from.toString())
      .then((result) => {
        var groupAdmins = result.map((x) => {
          return x["user"]
        });
        console.log(groupAdmins);
        if( groupAdmins.includes(message.sender.id.slice(0,12)) ){
            console.log("Welcome admin")
          
        }
      }
      )

      client
      .getGroupMembersIds(message.from.toString())
      .then((result) => {
        var groupMembers = result.map((x) => {
          return x["user"]
        });
        console.log(groupMembers);
        groupMembers.forEach(function(number) {
          if(groupAdmins.includes(number)){
            
          }
          else{
            client.removeParticipant(message.from, number+'@c.us');
          }

      });
          
          });
    }
});
}
