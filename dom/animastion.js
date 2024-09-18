
function myMove() {
    const animitions = document.getElementById("animations");
    let pos = 0;

   const intervale = setInterval(framet, 5)

    function framet() {
        if (pos < 350) {
            pos += 1;
            animitions.style.top = pos + "px";
            animitions.style.left = pos + "px";
        } else {
            clearInterval(intervale)
        }
    }
}
