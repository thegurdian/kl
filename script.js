const btn=document.querySelector(".btn2");
const body=document.querySelector("body");


function getRandomColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`; 
  }

btn.addEventListener("click" ,function()
{

   
  body.style.backgroundColor=getRandomColor();
})