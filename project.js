var showClock ;
function startBtn(){
    showClock = setInterval(starClock,500);
}
function starClock(){
    document.getElementById('showValue').innerText = new Date().toLocaleTimeString();

}
// stop 
function stopBtn(){
    clearInterval(showClock);
}
// reset 
function resetBtn(){
    clearInterval(showClock);
    document.getElementById('showValue').innerText = "0:00:00 PM";


}