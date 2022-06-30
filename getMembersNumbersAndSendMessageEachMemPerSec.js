// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

// this program will send private message for each member of this group which sent "dd" with delation this is safe
  function start(client) {
    client.onMessage((message) => {
      if (message.body === 'hellllo') {

      client
      // Get group Members
      .getGroupMembers(message.from.toString())
      .then((result) => {
        var groupMembers = result.map((x) => {});
        var i =0;
        
        function myLoop() {         //  create a loop function
            
            setTimeout(function() {   //  call a 3s setTimeout when the loop is called
                
              // return x["user"];
              client
              .sendText(result[i]["id"]["_serialized"], "اهلا");
              //  your code here
              i++;                    //  increment the counter
              if (i < groupMembers.length) {           //  if the counter < 10, call the loop function
                myLoop();             //  ..  again which will trigger another 
            }     
                              //  ..  setTimeout()
        }, (Math.floor(Math.random() * (7 - 5 + 1) + 5)*1000))
    }
    
    myLoop();                   //  start the loop                 //  set your counter to 1
    
    
    
    
    
    
    // console.log("Length is: "+groupMembers.length);
    // console.log(result);
}

)
}
    });
  }


