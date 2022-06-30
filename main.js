// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });
// this program has multi purpose in the same time
function start(client) {
  client.onMessage((message) => {
    // if the bot has admin in the group and any member write 'invite 966530000000' the bot will add him, and the rest commands have similar idea
    client

    if (message.body.startsWith("invite ")) {
      a = message.body.slice(-12)+"@c.us";
      console.log(a);
      client
        // Add participant
        client.addParticipant(message.from, a);
        then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    //---------------------------------------------------------------
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
    //---------------------------------------------------------------
    if (message.body.startsWith("remove ")) {
      a = message.body.slice(-12)+"@c.us";
      console.log(a);
      client
        // Remove participant
        if(a == "966538914185@c.us"){
          client
          .sendText(message.from, 'لا تُحاااول :)')
        }else{
          client.removeParticipant(message.from, a);
        }
        
        then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    //---------------------------------------------------------------
    // this command will mention any member randomly, but there is a glitch, all member will get notification of this mention
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
    //---------------------------------------------------------------
    // this command will mention all the members in one message
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
    //---------------------------------------------------------------
      // this command will mention all the members seperatly
    if (message.body === '@all' || message.body === '@الجميع') {
      client
      .getGroupMembersIds(message.from.toString())
      .then((result) => {
        var groupMembers = result.map((x) => {
            return x["user"]
        });
        console.log(groupMembers);
        var f;
        // Send @tagged message
        
        client.sendMentioned(
          message.from,
          ""+groupMembers.map((line) => `@${line}`),
          groupMembers
        )
        console.log(groupMembers)
      }
      
      )
    }
    //---------------------------------------------------------------
    // this command will mention all the group specific times, for example @all002 will mention 2 times, @all999 999 times
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
    //---------------------------------------------------------------
    
  });
}