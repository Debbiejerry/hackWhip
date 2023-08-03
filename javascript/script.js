// JavaScript for responsive navigation side menu
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

// The code block above selects the necessary DOM elements for the responsive navigation side menu: the menu container with the class "menu", the menu button with the class "menu-btn". and the close button with the class "close-btn".

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
    menuBtn.classList.add("hide")
});
// An event listener is added to the menu button. When clicked, it adds the "active" class to the menu container, and the "hide" class to the menu button.

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
    menuBtn.classList.remove("hide")
});
// Another event listener is added to the close button. When clicked, it removes the "active" class from the menu container and the "hide" class from the menu button, restoring their default states.

//JavaScript for background slider navigation
const btns = document.querySelectorAll(".slide-nav-btn");
const slides = document.querySelectorAll(".image-slide");
const infos = document.querySelectorAll(".info");

// The code block defines 3 constant variables: 'btns', 'slides', and 'infos'. using the '.querySelectorAll' to select elements with the respective class names: "slide-nav-btn", "image-slide", and "info".

var sliderNav = function(manual){
    // The 'sliderNav' function is declared which takes the parameter 'manual'. This function is responsible for updating the the active state of the slider navigation buttons, slides, and infos sections based on the 'manual' parameter.

    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    infos.forEach((info) => {
        info.classList.remove("active");
    });
    // Inside the 'sliderNav' function, the 'forEach' loop is used to remove the "active" class from all slider navigation buttons, slides, and info sections.

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    infos[manual].classList.add("active");
    // The 'btns[manual]', 'slides[manual]', and 'infos[manual]' elements corresponding to the 'manual' index are selected and have the "active" class added, indicating the current active state.
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});
// Another 'forEach' loop is used on the 'btns' array to attach a click event listener to each slider navigation button. When a button is clicked, it calls the 'sliderNav' function with the index 'i' as the 'manual' parameter.

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