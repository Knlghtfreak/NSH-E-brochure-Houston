const sliderTrack = document.getElementById("sliderTrack");
const totalSlides = 8;
let currentSlide = 0;

function updateSlider() {
  sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
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