

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
    client
    .sendImageAsStickerGif('966568324495@c.us', 'a.gif')

}
 


