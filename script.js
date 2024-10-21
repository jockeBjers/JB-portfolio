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

/* portfolio page */
const iframes = [
    {
        src: "https://jockebjers.github.io/rock-paper-scissors/",
        link: "https://github.com/jockeBjers/rock-paper-scissors",
        title: "Rock - Paper - Scissors"
    },
    {
        src: "https://jockebjers.github.io/Etch-a-Sketch/",
        link: "https://github.com/jockeBjers/Etch-a-Sketch",
        title: "Etch - a - sketch"
    },
    {
        src: "../images/Screenshot_163.png",
        link: "https://github.com/jockeBjers/StudentManagementSystem",
        title: "Student management system"
    }
];

let currentIframeIndex = 0;

function updateIframe() {
    const iframeElement = document.getElementById("portfolio-iframe");
    const linkElement = document.getElementById("portfolio-link");
    const prevButton = document.getElementById("portfolio-prev");
    const nextButton = document.getElementById("portfolio-next");

    iframeElement.src = iframes[currentIframeIndex].src;
    linkElement.href = iframes[currentIframeIndex].link;
    linkElement.textContent = iframes[currentIframeIndex].title;

    if (currentIframeIndex === 0) {
        prevButton.style.visibility = 'hidden';
    } else {
        prevButton.style.visibility = 'visible';
    }

    if (currentIframeIndex === iframes.length - 1) {
        nextButton.style.visibility = 'hidden';
    } else {
        nextButton.style.visibility = 'visible';
    }
}


function nextIframe() {
    if (currentIframeIndex < iframes.length - 1) {
        currentIframeIndex++;
        updateIframe();
    }
}

function previousIframe() {
    if (currentIframeIndex > 0) {
        currentIframeIndex--;
        updateIframe();
    }
}

window.onload = function () {
    typeWriter();
    updateIframe();
}