var timer=6;

function makebubble(){
var clutter = "";
for(var i=1; i<=70; i++){
clutter += `<a href="#" class="bubble">${i}</a>`;
}

document.querySelector("#pbtm").innerHTML = clutter
}


function runTimer(){
    var timerint= setInterval(counter,1000)

    function counter(){
        if (timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else{
            clearInterval(timerint);
            console.log("stop")
        }
    }
}


function getNewhit(){
    var rn = Math.floor(Math.random()*10);
    document.querySelector("#hitvalu").textContent = rn;
}

function scorenum(){
    var score= 10;
    score += 10;
    document.querySelector("#scorenu").textContent = score;
}
runTimer();
makebubble();
getNewhit();





