var timer=60;
var score=0; 
var hitrn=0;

function myFunction(){
    console.log("khjfrdfg")
    document.body.classList.toggle("dark-mode")
}

function makebubble(){
var clutter = "";
for(var i=1; i<=70; i++){
clutter += `<a href="#" onclick={scorenum(${i})} class="bubble">${i}</a>`;
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
            document.querySelector("#pbtm").innerHTML="<h1 class='gameover'>Game over</h1>";
            console.log("stop")
        }
    }
}

function getNewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitvalu").textContent = hitrn;
}

function scorenum(valu){ 
    if(valu==hitrn)
        score += 10;
   else
        score -= 10;
   
   document.querySelector("#scorenu").textContent = score;
   getNewhit()
}

document.querySelector("#pbtm").addEventListener("click",function (dets){
    var clickednum = console.log(Number(dets.target.textContents));
    if(clickednum===hitrn){
        scorenum();
        makebubble();
        getNewhit(); 
    }
} );
runTimer();
makebubble();
getNewhit();





