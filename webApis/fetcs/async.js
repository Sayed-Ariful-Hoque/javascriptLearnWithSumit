
const display2 = document.getElementById("display2")


async function getDataAsync(){
   const  res = await fetch("http://127.0.0.1:5500/webApis/fetcs/data.text")
   const data = await res.text();

   display2.innerText = data
}