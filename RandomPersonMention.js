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
    if (message.body === "random mention" || message.body === "rm" || message.body === "RM") {

      client

      .getGroupMembersIds(message.from.toString())
      .then((result) => {
        const groupMembers = result.map((x) => {
          return x["user"]
        });
        console.log(groupMembers);
        var a = (Math.floor(Math.random() * groupMembers.length));
        console.log(a);
       
        // Send @tagged message
        
        client.sendMentioned(
          message.from,
          "@"+groupMembers[a],
          groupMembers
        )
        
      }
      )
        // Remove participant
        // client.removeParticipant(message.from, a);
        then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
  });
}