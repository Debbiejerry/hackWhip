// JavaScript for responsive navigation side menu
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
    menuBtn.classList.add("hide")
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
    menuBtn.classList.remove("hide")
});

//JavaScript for background slider navigation
const btns = document.querySelectorAll(".slide-nav-btn");
const slides = document.querySelectorAll(".image-slide");
const infos = document.querySelectorAll(".info");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    infos.forEach((info) => {
        info.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    infos[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

//JavaScript for slider auto play
var slideIndex = 0;
var slideInterval = setInterval(autoSlide, 4000);

function autoSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    sliderNav(slideIndex);
}