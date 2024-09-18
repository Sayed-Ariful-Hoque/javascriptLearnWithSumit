const jesonString = '{"name":"John", "age":30, "city":"undefined"}'
const jesonString2 =  '["Ford", "BMW", "Audi", "Fiat"]'
const jesonString3 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}'
const jesonString4 = '{"name":"John", "birth":"2001-05-16", "city":"New York"}'

console.log(jesonString)
console.log(jesonString2)
console.log(jesonString3)
console.log(jesonString4)

const myObj = JSON.parse(jesonString)
console.log(myObj)

const myArry = JSON.parse(jesonString2)
console.log(myArry)

const myObj2 = JSON.parse(jesonString3)
console.log(new Date(myObj2.birth))

const myObj3 = JSON.parse(jesonString4, function(key, value){
    if(key === "birth"){
        return new Date()
    }
    return value
})
console.log(myObj3)