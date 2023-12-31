
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".slide");

  let index = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(${-index * 100}%)`;
  }

  function showNextSlide() {
    index = (index + 1) % slides.length;
    updateCarousel();
  }

  function showPrevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  // Adjust event listeners as needed (e.g., arrow keys, buttons)
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      showPrevSlide();
    } else if (event.key === "ArrowRight") {
      showNextSlide();
    }
  });
});
