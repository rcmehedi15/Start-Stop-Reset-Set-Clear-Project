const startBtnWork = document.getElementById('startBtn').addEventListener('click',function(){
    let num = 0;
    setInterval(() => {
        setNum = num++
        document.getElementById('showValue').innerText = setNum;
    }, 1000)

})


// const startBtnWork = setInterval() => {

// }

function stopBtn(){

    clearInterval(startBtnWork);

}
