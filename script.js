// Main slider
const mainSliderTrack = document.getElementById("sliderTrack");
const mainTotalSlides = 9;
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



// -----------------------------------------------------------//


// Page-5 Inside slider
const page5SliderTrack = document.getElementById("slider-track-page-5");
const page5Slides = document.querySelectorAll(".page-5-slide-img");
const page5SliderContainer = document.querySelector(".page-5-slider-container");

const page5TotalSlides = page5Slides.length;
let page5CurrentSlide = 0;
let page5AutoSlideInterval = null;
let page5IdleTimeout = null;

// Initial setup
page5Slides.forEach(slide => {
  slide.style.opacity = "0";
  slide.style.transition = "opacity 1s ease-in-out";
});
page5Slides[0].style.opacity = "1";

// Show correct slide
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

// Regular auto-slide every 3 seconds
function startAutoSlide() {
  stopAutoSlide(); // Clear if already running
  page5AutoSlideInterval = setInterval(() => {
    nextSlidepage5();
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(page5AutoSlideInterval);
}

// Idle-based auto-slide (hover logic)
function resetIdleTimer() {
  clearTimeout(page5IdleTimeout);
  page5IdleTimeout = setTimeout(() => {
    nextSlidepage5();
    startAutoSlide(); // Resume normal auto-slide after idle
  }, 3000);
}

// Hover logic
page5SliderContainer.addEventListener("mouseenter", () => {
  stopAutoSlide();       // Pause main auto-slide
  resetIdleTimer();      // Start idle timer
});

page5SliderContainer.addEventListener("mouseleave", () => {
  clearTimeout(page5IdleTimeout);
  startAutoSlide();      // Resume main auto-slide
});

// Arrow click logic (reset idle timer)
document.querySelector(".arrow-left-5").addEventListener("click", () => {
  prevSlidepage5();
  resetIdleTimer();
});

document.querySelector(".arrow-right-5").addEventListener("click", () => {
  nextSlidepage5();
  resetIdleTimer();
});

// Start auto-slide initially
startAutoSlide();





