// Hamburger menu
function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("active");
}

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function goToSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return;

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Hide all
    for (let s of slides) s.style.display = "none";
    for (let d of dots) d.classList.remove("active-dot");

    // Show current
    slides[slideIndex - 1].style.display = "block";
    if (dots[slideIndex - 1]) dots[slideIndex - 1].classList.add("active-dot");
}
