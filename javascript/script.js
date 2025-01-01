/* typewriter effect on the main page. */
var i = 0;
var txt = 'Välkommen, kul att ni har hittat hit!';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("intro").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

/* For the nav to know which section is in view */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".page-nav .page-links");

window.onscroll = () => {
    const midOfDevice = window.innerHeight / 2;
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - midOfDevice;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });
    if (scrollY === 0) {
        current = "header";
    }

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
};

/* Change scroll direction when on about page */
const aboutContainer = document.querySelector('.about-container');

aboutContainer.addEventListener('wheel', (event) => {
    if (window.innerWidth >= 600) {
        event.preventDefault();
        aboutContainer.scrollLeft += event.deltaY; 
    }
});

