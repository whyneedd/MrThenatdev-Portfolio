var cursor = document.getElementById("cursor-js");

document.addEventListener("mousemove", function(e) {
    var x = e.clientX;
    var y = e.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
})