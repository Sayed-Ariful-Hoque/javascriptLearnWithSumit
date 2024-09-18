

function sendRequst(method, url, data) {

    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.onload = function () {
            if(this.status >= 400 ){
                reject(`this was an appplication error and the response status is ${this.status}`)
            }
            else{
                resolve(this.response)
            }
        }
        xhr.onerror = function () {
            reject("Ther was an error")
        }
        xhr.open(method, url)

        xhr.responseType = "json"

        xhr.send(data)
    })
    return promise

}
function getData() {
    sendRequst("GET", "https://jsonplaceholder.typicode.com/todos/1").then((responseData) => {
        console.log(responseData)
    })
    .catch(err => {
        console.log(err)
    })
}

function sendData() {
    sendRequst("POST", "https://jsonplaceholder.typicode.com/posts",
        JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    })).then((responseData) => {
        console.log(responseData)
    })
}

const getButton = document.getElementById("get")
const sendButton = document.getElementById("send")


getButton.addEventListener("click", getData)
sendButton.addEventListener("click", sendData)