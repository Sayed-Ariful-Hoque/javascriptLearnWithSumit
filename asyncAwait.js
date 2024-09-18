
const paymentSucces = true;
const mark = 70;

function enroll() {
    console.log("crouse enrrolment is in Progess")

    const promics = new Promise(function (resolve, reject) {

        setTimeout(function () {
            if (paymentSucces) {
                resolve()
            } else {
                reject("Payment faild")
            }
        }, 200)
    })
    return promics
}

function progess() {
    console.log("crouse on Progress .....!")

    const promics = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (mark >= 80) {
                resolve()
            } else {
                reject("You Could not Get Enough marks to get The certificate")
            }
        }, 4000)
    })
    return promics
}

function getCertificate() {
    console.log("Perparing Your certificat")
    const promics = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Congrats You got you certificat")
        }, 1000);
    })
    return promics
}

async function course(){
    try{
        await enroll();
        await progess();
        const massage = await getCertificate();
        console.log(massage);

    } catch(erry) {
        console.log(erry)
    }
}
course();

// enroll()
//     .then(progess)
//     .then(getCertificate)
//     .then(function(value){
//         console.log(value)
//     })
//     .catch(function(erry){
//         console.log(erry)
//     })