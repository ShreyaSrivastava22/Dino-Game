
const dino = document.getElementById("dino");
const cactus =document.getElementById("cactus");

function jump(){
  if(dino.classList !="jump")
  {
dino.classList.add("jump");
setTimeout(function(){
  dino.classList.remove("jump");
}, 300);
}
}
document.addEventListener("keydown", function(event){
  jump();
});


let isAlive = setInterval(function (){
  //get current dino position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
//get current cactus position
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
//detect collision
if(cactusLeft <50 && cactusLeft > 0 && dinoTop >=250){
  alert("Oops! Game Over😥");
  window.location.reload();
}

}, 10);
