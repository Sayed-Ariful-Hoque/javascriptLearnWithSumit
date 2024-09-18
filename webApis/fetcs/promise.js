const display = document.getElementById("display")

function getData() {

    fetch("http://127.0.0.1:5500/webApis/fetcs/data.text")
    .then(res => res.text())
    .then((data) =>{
        display.innerText = data
        console.log("hello")
    })
    console.log("hello10")
}
