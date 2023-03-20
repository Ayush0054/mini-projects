const colors = ["green","red","rgba(173,12,204)","#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function (){
    //get random no between 0 -3 colors
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}); 

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }