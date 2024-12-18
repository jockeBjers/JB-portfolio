
const iframes = [
    {
        src: "https://jockebjers.github.io/calculator/",
        link: "https://github.com/jockeBjers/calculator",
        title: "Calculator"
    },

    {
        src: "https://mortal-weather.github.io/TempCheck/",
        link: "https://github.com/Mortal-Weather/TempCheck",
        title: "TempCheck"
    },

    {
        src: "https://jockebjers.github.io/cooking-school/",
        link: "https://github.com/jockeBjers/cooking-school",
        title: "Cooking School"
    },

    {
        src: "https://jockebjers.github.io/to-do-list/",
        link: "https://github.com/jockeBjers/to-do-list",
        title: "To - do - list"
    },

    {
        src: "https://jockebjers.github.io/LoginForm/",
        link: "https://github.com/jockeBjers/Loginform",
        title: "Sign - up - form"
    },

    {
        src: "https://jockebjers.github.io/rock-paper-scissors/",
        link: "https://github.com/jockeBjers/rock-paper-scissors",
        title: "Rock - Paper - Scissors"
    },

    {
        src: "https://jockebjers.github.io/Etch-a-Sketch/",
        link: "https://github.com/jockeBjers/Etch-a-Sketch",
        title: "Etch - a - sketch"
    }
];

let currentIframeIndex = 0;
const iframeElement = document.getElementById("portfolio-iframe");
const linkElement = document.getElementById("portfolio-link");
const prevButton = document.getElementById("portfolio-prev");
const nextButton = document.getElementById("portfolio-next");

function updateIframe() {


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

currentIframeIndex = 0;
updateIframe();

