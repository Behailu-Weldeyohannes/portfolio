const btnScroll = document.querySelector(".btnScrollToTop");

btnScroll.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});



// document.addEventListener("scroll", (e) => {
//   if (document.documentElement.scrollTop <= 150) {
//     btnScroll.style.display = "none";
//   } else {
//     btnScroll.style.display = "block";
//   }
// });
// const navbar = document.querySelector("#nav");
// const navBtn = document.querySelector("#nav-btn");
// const closeBtn = document.querySelector("#close-btn");
// const sidebar = document.querySelector("#sidebar");
// const date = document.querySelector("#date");


// add fixed class to navbar
// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 80) {
//     navbar.classList.add("navbar-fixed");
//   } else {
//     navbar.classList.remove("navbar-fixed");
//   }
// });
// show sidebar
// navBtn.addEventListener("click", function () {
//   sidebar.classList.add("show-sidebar");
// });
// closeBtn.addEventListener("click", function () {
//   sidebar.classList.remove("show-sidebar");
// });
// set year
// date.innerHTML = new Date().getFullYear();

let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
// let darkmode = document.querySelector("#darkmode");

// darkmode.onclick = () => {
//   if (darkmode.classList.contains("bx-moon")) {
//     darkmode.classList.replace("bx-moon", "bx-sun");
//     document.body.classList.add("active");
//   } else {
//     darkmode.classList.replace("bx-sun", "bx-moon");
//     document.body.classList.remove("active");
//   }
// };

// scroll effect

const sr = ScrollReveal({
  distance: "45px",
  duration: 2700,
  reset: true,
});

sr.reveal(".home-text", { delay: 350, origin: "left" });
sr.reveal(".home-img", { delay: 350, origin: "right" });
sr.reveal(".sub-service, .about, .portfolio, .services, .projects , .contact", {
  delay: 200,
  origin: "bottom",
});

var typed = new Typed(".typing", {
  strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed(".typing-2", {
  strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
