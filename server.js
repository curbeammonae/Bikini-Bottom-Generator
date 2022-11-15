const express = require("express"); //since i know im using express for this App, i am going to make sure we have access to express
const app = express(); //storing express in 'app' variable. wherever you see 'app' you know you're using express
const cors = require('cors')
const PORT = 8300;
/*first thing we do is setup server to hear request and respond*/

app.use(cors())


const bikinibottom = {
 id1 : {bName: "Doodle Bob",
  bImage:
    "https://i.kym-cdn.com/entries/icons/original/000/020/981/CvllgCSUIAAvycY.jpg",
  quote: "Meyohimeyoi!",

},
 id2 : {bName: "Squilliam Fancyson",
  bImage:
    "https://static.wikia.nocookie.net/spongebob/images/9/91/Band_Geeks_012.png/revision/latest?cb=20191124031401",
  quote: "Squidward Tentacles has the fanciest restaurant in Bikini Bottom, and he does not suck eggs",

},
 id3 : {bName: "Bubble Bass",
  bImage:
    "https://i.kym-cdn.com/entries/icons/mobile/000/026/636/Screen_Shot_2018-08-20_at_7.12.25_PM.jpg",
  quote: " This is pretty good. Only one thing... you forgot THE PICKLES!",

},
 id4 : {bName: "Mr. Krabs",
  bImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9c0yJd2-ynTKwp4DaDPCYFNKFy7flmq9jZA&usqp=CAU",
  quote: "The money is always right!",

},
 id5 : {bName: "Patrick",
  bImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPj2LsKuBQHGIZdKGdVPs3BOm_dM8R7eqWg&usqp=CAU",
  quote: "I wumbo, you wumbo, he she we wumbo",

},
 id6 : {bName: "Spongebob",
  bImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8VAO1DBAt4GhyWdHUFlw5jyQsjD0wTxDDA&usqp=CAU",
  quote: "I'm ugly and I'm proud!",

},
 id7 : {bName: "Squidward",
  bImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9kOWGhjiLHSJJvlPqhAwjOGL26ulHsOj_w&usqp=CAU",
  quote: "I hate all of you.",

},
 id8 : {bName: "Gary",
  bImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8PqgzNYgpjPNacoDSGdXjZ5Ia3PMq9Iutw&usqp=CAU",
  quote: "meow",

},
 id9 : {bName: "Mermaid Man",
  bImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPrkSzmJd8BPA_i8mbML157WPHpitdty8QA&usqp=CAU",
  quote: "Mermaid Man and Barnacle Boy UNITE!",

},
 id10 : {bName: "Barnacle Boy",
  bImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo0MO3nx6aZ2TdOTW_i9EKyx9WR44T3gBhw&usqp=CAU",
  quote: "Mermaid Man and Barnacle Boy UNITE!",

},
 id11 : {bName: "Sandy",
  bImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp7BhZh6dD0lit2V8vdOZpl1Ph6ptgJ1zKQA&usqp=CAU",
  quote: "YEEEEE-HAW!!!!!",

},
 id12 : {bName: "Pearl",
  bImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCBWY2T9VHc8igfgQYLD8VU9RdqXuU87d3A&usqp=CAU",
  quote: "Oh, Dad! You're embarrassing me again!",

},
 id13 : {bName: "Plankton",
  bImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlLetVQsOgXXXGzupnCJNt4VCUvd5NObFWzQ&usqp=CAU",
   quote: "“I will destroy all of you!",

},
 id14 : {bName: "Karon",
  bImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmeO47-Wn0BhlU7KvmJUEa75cFI8iyWxc_yQ&usqp=CAU',
  quote: "Seaweed: 50% Sea, 50% Weed",

},
 id15 : {bName: "Larry the Lobster",
  bImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR33ulIKTTYUYiUcCmhAa07ikoVviWt35Vn8Q&usqp=CAU",
  quote: "You guys wanna go lift some weights?",

},
 id16 : {bName: "Mrs.Puff",
  bImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVW4aVnHYgvqUmAcd7rFrhkYZy6zslBkAGgQ&usqp=CAU",
  quote: "You need six hundred to pass, you got six.",

},

};

//app.get is the beginning of our REQUEST
//once we 'hear' a .get REQUEST on the '/' path, we want to RESPOND
app.get("/", (request, response) => {
  //sending our html file
  response.sendFile(__dirname + "/index.html");
});

//use this url to request a specifc person
//this ':' lets express know this will be a query parameter
//whenever i see 'fish' its actually 'id1' or 'id2' etc.
app.get('/api/:fish', (request, response) => {
  
    const deepBlueSea = request.params.fish.toLocaleLowerCase()//the 
    //the request.we pull the parameter off.the fish parameter
//we store 'fish; parameter in deepBlueSea
//whenever i see 'fish' its actually 'id1' or 'id2' etc.


    if(bikinibottom[deepBlueSea]){
//since id1 or id2 or id3 (deepBlueSea) exists inside our bikinibottom object
//we grab that and respond with that information
response.json(bikinibottom[deepBlueSea])

    }else{
        response.json('no data')
        //if we dont have it then we will see 'no data' on the page

    }
  response.json(bikinibottom);//when we hear somebody request on the /api path, we send JSON

});

//telling the server to be up & running on PORT 8300
app.listen(process.env.PORT || PORT, () => {
  console.log(`the server is running on ${PORT}`);
});
