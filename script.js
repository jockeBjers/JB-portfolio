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

    prevButton.style.visibility = currentIframeIndex === 0 ? 'hidden' : 'visible'; 
    nextButton.style.visibility = currentIframeIndex === iframes.length - 1 ? 'hidden' : 'visible'; 
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

updateIframe();
