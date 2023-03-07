// Variable Declaration 

var showClock ;

// start button 
function startBtn(){
    showClock = setInterval(starClock,500);
}
function starClock(){
    document.getElementById('showValue').innerText = new Date().toLocaleTimeString();

}
// stop button 
function stopBtn(){
    clearInterval(showClock);
}
// reset button 
function resetBtn(){
    clearInterval(showClock);
    document.getElementById('showValue').innerText = "0:00:00 PM";

}
