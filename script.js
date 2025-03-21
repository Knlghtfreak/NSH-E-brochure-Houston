const sliderTrack = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let slideWidths = [];

function calculateWidths() {
  slideWidths = Array.from(slides).map(slide => slide.offsetWidth);
}

function updateSlider() {
  let offset = 0;
  for (let i = 0; i < currentSlide; i++) {
    offset += slideWidths[i];
  }
  sliderTrack.style.transform = `translateX(-${offset}px)`;
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlider();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
}

window.onload = calculateWidths;
window.onresize = calculateWidths;
