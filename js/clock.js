const clock = document.querySelector(".js-clock");

function diff(){
    const date = new Date();
    clock.innerText=`${date.getHours()}:${date.getMinutes()}`;
}

diff();

setInterval(diff, 1000);