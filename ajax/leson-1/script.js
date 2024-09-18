
function lodeData(){

    // create a new requst
    const xhr = new XMLHttpRequest();


    // what to do wher response arrives
    xhr.onload = function(){
        const container = document.getElementById("demo")

        container.innerHTML  = xhr.responseText;
    };

    // preapar request methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
    xhr.open("GEt", "./data/data.text" )

    // send request 
    xhr.send()
}