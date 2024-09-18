// const cars = ['a', "b", "c", "d" ,"e", "f", "g"]

// for(let i = 0;  i < cars.length; i++){
//     console.log(i)
// }

// console.log("I am done")

// let i = 5 

// for ( let i = 0 ; i < 10; i++ ){
//  console.log(i)
// }
// console.log("golobar" ,i)


// const persone = {farstName:"ariful", lName:"hoque", age:"24"}

// for(let i in persone){
//     console.log(persone[i])
// }


// const numbers = [22, 34, 12, 23, 25, 35, 56, 74, 89,]

// for( let number in numbers){
//     console.log(numbers[number])
// }


// const a = [23, 20 , 340, 490, 90, 9]

// for(let x of a ){
//     console.log(a)
// }


// const mySet = new Set()
// mySet.add("a")
// mySet.add("c")
// mySet.add("b")

// console.log(mySet)




// const leters = new Set(["a","b", "c", "d","e",'f'])
// text = ""
// leters.forEach(function(value){
//     text += value
// })

// console.log(text)



// const frouts = new Map();
// frouts.set("apples",500)
// frouts.set("bananas",200)
// frouts.set("mango",400)
// frouts.delete("apples")

// console.log(frouts



// console.log(parseInt(98.9))


// class Car{
//     constructor(name, age, id){
//         this.name = name
//         this.age = age 
//         this.id = id
//     }
//     play(){
//         console.log(`${this.name} age ${this.age}  and id ${this.id} is Playeng and `)
//     }
// }


// const car1 = new Car("sakib", 20, 9090976)
// const car2 = new Car("rakib",)
// const car3 = new Car("ariful", 20, 9090976)

// console.log(car1)

// car1.play()
// car2.play()
// car3.play()




// const persone = {
//     name: "Jhone",
//     age: "32",
//     city: "New Work"
// }

// let text = ""
// for (let x in persone) {
//      text += persone[x]
// }

// document.getElementById("demo").innerHTML = text


// const persone0 = {
//     name: "Jhone",
//     age: "32",
//     city: "New Work"
// }

// const personeArray = Object.values(persone0)
// for(x of personeArray){
// }
// document.getElementById("demo").innerHTML =personeArray



// const persone1 = {
//     name: "Jhone",
//     age: "32",
//     city: "New Work"
// }

// console.log( JSON.stringify(persone1))


// const persone = {
//     name: "Jhone",
//     age: "32",
//     today: new Date()
// }
// let myString = JSON.stringify(persone)
// document.getElementById("demo").innerHTML = myString




// const persone = {
//     name: "Jhone",
//     age: function(){return 30;}
// }
// let myString = JSON.stringify(persone)
// document.getElementById("demo").innerHTML = myString



// const persone ={
//     farstName: "jhon",
//     lestName: "doe",
//     language: "en",
//     get fullName(){
//         return this.farstName + " " + this.lestName
//     }
// }
// console.log(persone.fullName) 



// const persone = {
//     farstName: "jhon",
//     lestName: "doe",
//     language: "en",
//     set lang(lang){
//         this.languages = lang
//     }
// }
// persone.lang = "bn"
// console.log(persone) 



// function Persone (farst, last, age){
//     this.farstName = farst;
//     this.lastName = last;
//     this.age = age

//     function fullName(){
//         return this.farstName + " " + this.lastName;
//     }
// }

// const ariful = new Persone("Sayed Ariful", "Hoque", 24)
// const Fahim = new Persone("Fahim", "uddin", 22)
// const Saiful = new Persone("Saiful", "Islam", 23)
// ariful.cuntry = "bangladesh"
// console.log( ariful)
// console.log( Fahim)
// console.log( Saiful)

// Persone.city = "dhaka"

// Persone.prototype.city = "Noakhili"


// console.log(ariful.city)
// console.log(Fahim.city)



// const numbers = [1, 2, 3, 4,5]
// for(let i = 0; i  < numbers.length; i++ ){
//     console.log(numbers[i])
// }


// const numbers = [1, 2, 3, 4,5]
// for( n of numbers ){
//     console.log(n)
// }



// const numbers = {
//     one: 1,
//     tow: 2,
//     three: 3
// }
// console.dir(numbers)

// const nums = [1, 2, 3]
// console.dir(nums)
// for(let n of numbers){
//     console.log(n)
// }



// function a ( x, y){
//     return x * y;
// }
// console.log(a(3, 8))



// console.log("Line 1 Code ")

// setTimeout(function(){
//     console.log("Line 2 Code")
// }, 0)

// setInterval(function(){
//     console.log("Line 4 Code")
// }, 5000)
// console.log("Line 3 Code ")
// console.log("Line 5 Code ")




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





// let statucs = true;

// console.log("taks 1")
// const promics = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         if (statucs) {
//             resolve("taks 2 ")
//         } else {
//             reject("faild")
//         }
//     })
// }, 2000)

// promics
//     .then(function(value){
//         console.log(value)
//     })
//     .catch(function(err){
//         console.log(err)
//     })

//     console.log("taks 3")









