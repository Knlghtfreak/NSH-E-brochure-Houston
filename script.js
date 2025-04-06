// Main slider
const mainSliderTrack = document.getElementById("sliderTrack");
const mainTotalSlides = 10;
let mainCurrentSlide = 0;

function updateMainSlider() {
  mainSliderTrack.style.transform = `translateX(-${mainCurrentSlide * 100}%)`;
}

function nextSlide() {
  if (mainCurrentSlide < mainTotalSlides - 1) {
    mainCurrentSlide++;
    updateMainSlider();
  }
}

function prevSlide() {
  if (mainCurrentSlide > 0) {
    mainCurrentSlide--;
    updateMainSlider();
  }
}

// Add event listener for keyboard arrow keys
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowRight") {
    nextSlide(); // Move to the next slide
  } else if (event.key === "ArrowLeft") {
    prevSlide(); // Move to the previous slide
  }
});




// -----------------------------------------------------------//


const page5SliderTrack = document.getElementById("slider-track-page-5");
const page5Slides = document.querySelectorAll(".page-5-slide-img");
const page5TotalSlides = page5Slides.length;
let page5CurrentSlide = 0;
let page5AutoSlideInterval;

// Apply initial transition & opacity
page5Slides.forEach(slide => {
  slide.style.opacity = "0";
  slide.style.transition = "opacity 1s ease-in-out";
});
page5Slides[0].style.opacity = "1";

// Function to update slide visibility
function updatePage5Slider() {
  page5Slides.forEach((slide, index) => {
    slide.style.opacity = index === page5CurrentSlide ? "1" : "0";
  });
  page5SliderTrack.style.transform = `translateX(-${page5CurrentSlide * 100}%)`;
}

function nextSlidepage5() {
  page5CurrentSlide = (page5CurrentSlide + 1) % page5TotalSlides;
  updatePage5Slider();
}

function prevSlidepage5() {
  page5CurrentSlide = (page5CurrentSlide - 1 + page5TotalSlides) % page5TotalSlides;
  updatePage5Slider();
}

// Auto slide function
function startAutoSlide() {
  page5AutoSlideInterval = setInterval(nextSlidepage5, 3000); // Change slide every 3s
}

function stopAutoSlide() {
  clearInterval(page5AutoSlideInterval);
}

startAutoSlide();

// Pause on hover
page5SliderTrack.addEventListener("mouseenter", stopAutoSlide);
page5SliderTrack.addEventListener("mouseleave", startAutoSlide);







