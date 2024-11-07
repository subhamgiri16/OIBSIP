let currentSlide = 0;
const testimonials = document.querySelectorAll(".testimonial");
const totalSlides = testimonials.length;

function showSlide(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? "block" : "none";
  });
}

document.querySelector(".prev").addEventListener("click", () => {
  currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
  showSlide(currentSlide);
});

document.querySelector(".next").addEventListener("click", () => {
  currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
  showSlide(currentSlide);
});

// Initial display
showSlide(currentSlide);
