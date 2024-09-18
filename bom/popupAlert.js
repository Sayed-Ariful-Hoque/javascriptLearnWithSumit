
const confirmValu = document.getElementById("confirm")
const promptValu = document.getElementById("prompt")


function showAlert(){
    window.alert("Hello World")
}

function showConfirm(){
   let textv = "";

    if(window.confirm("please  Press a button!")){
        textv = "You press ok";
    }else{
        textv = "You press cancle";
    }
    confirmValu.innerHTML = textv;
}

function showPromt(){
  let  textv = ""
  let person =  window.prompt("Please Enter Your Name")
  if(person === "" || person === null){
    textv = "Youser cancle the promt!"
  }else{
    textv = "Hello " + person + "! How are you?"
  }
  promptValu.innerHTML = textv
}