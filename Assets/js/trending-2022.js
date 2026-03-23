const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  }
});

nextBtn.addEventListener("click", () => {
  nextBtn.classList.add("active");
  prevBtn.classList.remove("active");
});

prevBtn.addEventListener("click", () => {
  prevBtn.classList.add("active");
  nextBtn.classList.remove("active");
});