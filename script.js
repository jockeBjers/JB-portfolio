/* INDEX PAGE */
var i = 0;
var txt = 'Well hello there, welcome. Behave or get kicked out';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("intro").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();