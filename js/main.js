const menuBtn = document.querySelector(".menu-btn");
const navegacion = document.querySelector(".navegacion");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navegacion.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contenidos = document.querySelectorAll(".contenido");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    
});

slides.forEach((slide) => {
    slide.classList.remove("active");
});

contenidos.forEach((contenido) => {
    contenido.classList.remove("active");
});

btns[manual].classList.add("active");
slides[manual].classList.add("active");
contenidos[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});