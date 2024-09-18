function validation(){
    const inputObject = document.getElementById("id1")
    
    if(inputObject.validity.rangeUnderflow){
        inputObject.setCustomValidity("You have made a range underflow error!")
    }
    if(inputObject.validity.rangeOverflow){
        inputObject.setCustomValidity("You have made a range overflow error!")
    }
    if(inputObject.validity.valueMissing){
        inputObject.setCustomValidity("value Missing!")
    }

    if(!inputObject.checkValidity()){
        document.getElementById("demo").innerHTML = inputObject.validationMessage;
    }
}