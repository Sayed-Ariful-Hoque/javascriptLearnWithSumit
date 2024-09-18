
let w;
function startWorker(){
    if(typeof Worker !== "undefind") {
        // worker available

        // if w  worker is not already defind
        if(typeof w == "undefined"){

            // create a new worker called "w"
            w = new Worker("workers.js")
        }

        // listening for worker events / messages

        w.onmessage = function(event){
            console.log(event)
            document.getElementById("demo").innerHTML = event.data
        }

    }else{
        alert("Your browser does not suppot web worker!")
    }
}

function StopWorker(){
    if(typeof Worker !== "undefined"){
        w.terminate();
        w = undefined
    }else{
        alert("Your browser does not suppot web worker!")
    }
}