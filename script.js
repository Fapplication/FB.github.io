const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Smooth Scroll Animation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = window.scrollY;
        const offset = section.offsetTop - 200;
        const height = section.offsetHeight;

        if(top >= offset && top < offset + height){
            section.classList.add("show");
        }

    });

});
