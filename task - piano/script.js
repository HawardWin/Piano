const express = require('express');
const server = express();
server.listen(3000)

server.get('/about' , (req,res)=>{
  res.send("Piano")
})

let audio ={
a : "72.mp3" ,
s : "77.mp3" ,
d : "79.mp3",
f : "84.mp3",
g : "96.mp3",
h : "69.mp3",
j : "65.mp3",
k : "64.mp3",
l : "60.mp3",
z : "53.mp3" ,
r : "whtkey1.mp3" ,
m : "48.mp3" ,
x : "41.mp3" ,
n : "whtkey1.mp3" ,
c : "whtkey2.mp3" ,
b : "blck1.mp3",
t : "blck2.mp3" ,
y : "blck3.mp3" ,
u : "blck4.mp3" ,
v : "blck5.mp3",


}

let audioPlay = {} ;


for(let key in audio){
audioPlay[key] = new Audio("sound/" + audio[key]);
};

document.addEventListener('keydown', function (val){
    
     
  let key = val.key.toLocaleLowerCase();
  
if( audio[key]){
  let s = audioPlay[key];
  s.currentTime = 0 ;
  s.cloneNode().play();    // here cloneNode() help me to play repeating key fastly
}
else console.warn("wrong")
   

// css change  for whitekeys
         
   const keypress = document.querySelector(`[data-key="${key}"]`);
     
   if(keypress){
    
    keypress.classList.add("whtkeypress")
   }


   // css change  for blackkeys
   const keypress2 = document.querySelector(`[data-blkkey="${key}"]`);
     console.log(keypress2)
   if(keypress2){
    
    keypress2.classList.add("blkkeypress")
   } 

});


  document.addEventListener("keyup", function(val){

    key = val.key.toLowerCase();

  const keypress = document.querySelector(`[data-key="${key}"]`);

  if(keypress){
    keypress.classList.remove("whtkeypress");
  }


  const keypress2 = document.querySelector(`[data-blkkey="${key}"]`);
  if(keypress2){
    keypress2.classList.remove("blkkeypress");
  }
});

