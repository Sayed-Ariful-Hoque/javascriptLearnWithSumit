//select dom element 

const width = document.getElementById("width")
const height = document.getElementById("height")
const availWidth = document.getElementById("availWidth")
const availHeight = document.getElementById("availHeight")
const colorDepth = document.getElementById("colorDepth")
const pixelDepth = document.getElementById("pixelDepth")



// show window.screen object property values

width.innerHTML = "screen width: " + screen.width
height.innerHTML = "screen height: " + screen.height
availWidth.innerHTML = "screen availWidth: " + screen.availWidth
availHeight.innerHTML = "screen availHeight: " + screen.availHeight
colorDepth.innerHTML = "screen colorDepth: " + screen.colorDepth
pixelDepth.innerHTML = "screen pixelDepth: " + screen.pixelDepth