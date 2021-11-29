"use strict";

let fish = document.querySelector('.fish'),
    pause = document.querySelector('.pause'),
    reset = document.querySelector('.reset'),
    start = document.querySelector('.start'),
    count = 0,
    fishInterval,
    checkAnimation = false;

let fishSail = function(){
    fishInterval = requestAnimationFrame(fishSail);
    count++;
    fish.style.left = count + "px";
};

start.addEventListener('click', function(){
    if(!checkAnimation){
        checkAnimation = true;
        fishSail();
    }
});

pause.addEventListener('click', function(){
    if(checkAnimation){
        cancelAnimationFrame(fishInterval);
        checkAnimation = false;
    }
});

reset.addEventListener('click', function(){
    cancelAnimationFrame(fishInterval);
    fish.style.left = '0';
    count = 0;
    checkAnimation = false;
});

