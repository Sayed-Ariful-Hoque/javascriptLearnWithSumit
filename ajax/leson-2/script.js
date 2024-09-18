
function lodeData(callBackF ){

    // create a new requst
    const xhr = new XMLHttpRequest();


    // what to do wher response arrives
    xhr.onload = function(){
       callBackF(this)
    };

    
    // preapar request methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
    xhr.open("GEt", "./data/data.text" )
    
    // add a request header
    xhr.setRequestHeader("MYGF",  "Javascript")

    // send request 
    xhr.send()


    // abort
    // xhr.abort()
}

function myCallBack1(xhr){
    const container = document.getElementById("demo")

    container.innerHTML  = xhr.responseText;
}
function myCallBack2(xhr){
    const container = document.getElementById("demo2")

    container.innerHTML  = xhr.responseText;
}