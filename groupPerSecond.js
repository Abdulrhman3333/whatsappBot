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
    var i = 0;                  //  set your counter to 1

function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
      // Create group (title, participants to add)
      client.createGroup(" ", [
       '966538914185@c.us',
   ]);
                        //  your code here
    i++;                    //  increment the counter
    if (i < 5) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 1000)
}

myLoop();                   //  start the loop

}



