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
      if (message.body.startsWith("@all")){
        a = parseInt(message.body.slice(-3))
      client
      .getGroupMembersIds(message.from.toString())
      .then((result) => {
        var groupMembers = result.map((x) => {
            return x["user"]
        });
        console.log(groupMembers);
        var f;
        // Send @tagged message
        var i;
        for (i = 0; i < a ; i++) {
        client.sendMentioned(
          message.from,
          ""+groupMembers.map((line) => `@${line}`),
          groupMembers
        )
      }
      }
      
      )
    }
    });
  }


