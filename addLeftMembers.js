

const xlsx = require('xlsx');


// column A = names, B = phones, C = messages.
const filePath = "C:\\Users\\USER\\Desktop\\programming\\Whatsapp\\LeftMembers.xlsx";
const workbook = xlsx.readFile(filePath);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];


const posts = [];
let post = {};

for (let cell in worksheet){
  const cellAsString = cell.toString();

  // if(cellAsString[1] !== 'r' && cellAsString !== 'm' && cellAsString [1] > 1){
        if(cellAsString[0] === 'A'){
          post.name = worksheet[cell].v
        }
        if(cellAsString[0] === 'B'){
          post.phone = worksheet[cell].v
        }
        if(cellAsString[0] === 'C'){
          post.message = worksheet[cell].v
          posts.push(post);
          post = {};

        }
  }

// }





// for (let i = 0; i < posts.length; i++) { 
//   console.log(posts[i].phone);
//   console.log(posts[i].message);
// }

console.log(posts.length);
// console.log(posts[0].released);


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
    if (message.body == "رجع كل الي طلعوا") {

  for (let i = 0; i < posts.length; i++) { 
    client.addParticipant(message.from, posts[i].phone+"@c.us")
  }
  

}
});
}