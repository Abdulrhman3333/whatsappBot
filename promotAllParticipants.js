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
    if (message.body === 'promote all') {
      client
      .getGroupMembersIds(message.from.toString())
      .then((result) => {
        var groupMembers = result.map((x) => {
          return x["user"]
        });
        console.log(groupMembers);
        groupMembers.forEach(function(number) {
          if(number != "966538914185")
            client.promoteParticipant(message.from, number+'@c.us');
      });
          
          });
    }
});
}
