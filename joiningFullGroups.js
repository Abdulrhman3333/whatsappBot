// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

// this program will try to join full group, by entring its URL
function start(client) {
  var i = 0;                  //  set your counter to 1

  function myLoop() {         //  create a loop function
    setTimeout(function() {   //  call a 3s setTimeout when the loop is called
      
      client.joinGroup("https://chat.whatsapp.com/K09cLxLNvDrGzdNqxIXALE");
      console.log("Hi")
                          //  your code here
      i++;                    //  increment the counter
      if (i < 5) {           //  if the counter < 10, call the loop function
        myLoop();             //  ..  again which will trigger another 
      }                       //  ..  setTimeout()
    }, 5000)
  }
  
  myLoop();                   //  start the loop



  

}
  

