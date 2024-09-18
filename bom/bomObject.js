let myWindo;

// select dom element 
const width = document.querySelector(".width")
const hight = document.querySelector(".hight")


// show window object properties

width.innerHTML = "window inner is width is: " + window.innerWidth;
hight.innerHTML = "window inner is hight is: " + window.innerHeight;

function openWindo(){
     myWindo = window.open("https://google.com");
}

function closeWindo(){
  myWindo.close();
}