const back = document.querySelector("body");
const img = ["2023.png","money.jpeg","poo.jpeg","rab.jpeg","rose.jpeg","sea.jpg","단풍.jpeg"];

const num = Math.floor(Math.random()*img.length);
back.style.backgroundImage=`url(img/${img[num]})`;
back.style.backgroundRepeat="no-repeat ";
back.style.backgroundSize="cover";



