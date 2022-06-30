

const xlsx = require('xlsx');

// const filePath = process.argv.slice(2)[0];
const filePath = "C:\\Users\\USER\\Desktop\\programming\\Whatsapp\\maqraah.xlsx";
const workbook = xlsx.readFile(filePath);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];


const posts = [];
let post = {};
var a = 1;

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
  
      client
      // Get group Members

        var i =0;
        
        function myLoop() {         //  create a loop function
            
            setTimeout(function() {   //  call a 3s setTimeout when the loop is called
                
              // return x["user"];
              client
              // client.addParticipant("120363039138426184@g.us", "966" + posts[i].phone+"@c.us")
              client.addParticipant("120363041189871946@g.us", "966" + posts[i].phone+"@c.us")
              //  your code here
              i++;                    //  increment the counter
              if (i <= posts.length) {           //  if the counter < 10, call the loop function
                myLoop();             //  ..  again which will trigger another 
            }     
                              //  ..  setTimeout()
          (i%5 == 0 && i != 0) ? a = 5000 : a = 1000; 
        }, a)
    }
    
    myLoop();                   //  start the loop                 //  set your counter to 1
    
  }
  console.log("Finished!");