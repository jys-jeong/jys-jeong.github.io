const clock = document.querySelector(".js-clock");

function diff(){
    const date = new Date();
    const h =String(date.getHours()).padStart(2,"0");
    const m =String(date.getMinutes()).padStart(2,"0");
    clock.innerText=`${h}:${m}`;
}

diff();

setInterval(diff, 1000);