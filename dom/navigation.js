const navigations = document.querySelector("#navigations")

const way1 = navigations.innerHTML 
console.log(way1)

const way2 = navigations.firstChild.nodeValue
console.log(way2)

const way3 = navigations.childNodes[0].nodeValue
console.log(way3)