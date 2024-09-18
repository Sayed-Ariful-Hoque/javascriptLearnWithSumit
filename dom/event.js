function clickFunctio(){
    const title = document.querySelector("#clickText");

    title.innerHTML = "Hllow Text";
}




const buttons = document.querySelector("#buttons");

buttons.onclick = function(){
    console.log("hello world")
}



const addEvent = document.querySelector('#addEvent')

addEvent.addEventListener("click", myFunction)

function myFunction(){
    console.log("AddEventListener")
}

addEvent.addEventListener("click", function(){
    console.log('my clik')
})
addEvent.addEventListener("mouseover", function(){
    console.log('use put thi mouseover')
})
