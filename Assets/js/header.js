const burger = document.getElementById("burger");
const nav = document.querySelector(".nav-con");
const header = document.querySelector("header");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

window.addEventListener("scroll", () => {

  if(nav.classList.contains("active")) return;
  console.log(window.scrollY);


  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

