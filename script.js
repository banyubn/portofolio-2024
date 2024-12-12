const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const big_subtitle = document.querySelector(".big-subtitle");
const header = document.querySelector("header");
const shadow_transition = document.querySelector(".shadow-transition");AOS.init();

const section = document.querySelector("section");
const opacity = document.querySelectorAll(".opacity")
const border = document.querySelector(".border")

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height) * 2.5;
    });

    big_title.style.opacity = - scroll / (header_height / 1.8) + 1;
    big_subtitle.style.opacity = - scroll / (header_height / 1.6) + 1;

    shadow_transition.style.height = `${scroll * 0.5 + 300}px`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 10}rem`
})