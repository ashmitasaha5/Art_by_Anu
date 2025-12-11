// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("nav-menu");
toggle.addEventListener("click", () => menu.classList.toggle("show"));

// Fade-up scroll animations
const items = document.querySelectorAll(".fade-up");

const showOnScroll = () => {
  items.forEach(item => {
    if (item.getBoundingClientRect().top < window.innerHeight - 80) {
      item.classList.add("visible");
    }
  });
};

document.addEventListener("scroll", showOnScroll);
showOnScroll();
