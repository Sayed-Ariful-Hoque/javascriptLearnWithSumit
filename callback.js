// const paymentSucces = true;
// const mark = 80;


// function enroll(callback){
//     console.log("crouse enrrolment is in Progess")

//     setTimeout( function(){
//         if(paymentSucces){
//             callback();
//         }else{
//             console.log("payment faild")
//         }
        
//     }, 2000);
// }

// function progress(callback){
//     console.log("crouse on Progress .....!")

//     setTimeout(function(){
//         if(mark >= 80 ){
//             callback();
//         }else{
//             console.log("You Could not Get Enough marks to get The certificate")
//         }
//     }, 4000)
// }

// function getCertificate (){
//     console.log("Perparing Your certificat")

//     setTimeout( function(){
//         console.log("Congrats You got you certificat")
//     }, 1000);
// }

// enroll(function(){
//     progress(getCertificate)
// })