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
      if (message.body === '@allSep' || message.body === '@الجميع منف') {
      client
      .getGroupMembersIds(message.from.toString())
      .then((result) => {
        const groupMembers = result.map((x) => {
            return x["user"]
        });
        console.log(groupMembers);
        var f;
        // Send @tagged message
        for (f in groupMembers){
        client.sendMentioned(
          message.from,
          "@"+groupMembers[f],
          groupMembers
        )
        }
      }
      )
    }
    });
  }


