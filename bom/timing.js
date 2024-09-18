
const timeoutValu = document.getElementById("timeout")
const intervalValu = document.getElementById("interval")

let timeOutInstance;
let intervalInstance;
function startTimeOut(){
    timeOutInstance = setTimeout(() => {
        timeoutValu.innerHTML = "3 secend over"
    }, 3000);

}

function stopTimeOut(){
    clearTimeout(timeOutInstance)
}


function startInterval(){
    intervalInstance = setInterval(() => {
        intervalValu.innerHTML = new Date().toLocaleTimeString()
    }, 1000);

}

function stopInterval(){
    clearInterval(intervalInstance)
}