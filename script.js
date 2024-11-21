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

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".page-nav .page-links");

window.onscroll = () => {
    const midOfDevice = window.innerHeight / 2;
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - midOfDevice;
        if (scrollY >= sectionTop ) {
          current = section.getAttribute("id"); }
      });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
};