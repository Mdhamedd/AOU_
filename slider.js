const sliderContainer = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;
const totalSlides = slides.length;
const slidesToShow = 3; // Number of images to show at a time

// Update slider position
function updateSliderPosition() {
  const slideWidth = slides[0].clientWidth;
  sliderContainer.style.transform = `translateX(-${
    currentIndex * slideWidth
  }px)`;
}

// Move to the next slide
nextButton.addEventListener("click", () => {
  if (currentIndex < totalSlides - slidesToShow) {
    currentIndex++;
    updateSliderPosition();
  }
});

// Move to the previous slide
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
  console.log("prev clicked");
});

// S-Slider Section Latest New
$(document).ready(function () {
  var $slider = $(".slick-slider");

  $slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  // Custom navigation buttons
  $("#prev").click(function () {
    $slider.slick("slickPrev");
  });

  $("#next").click(function () {
    $slider.slick("slickNext");
  });
  $("#prevv").click(function () {
    $slider.slick("slickPrev");
  });

  $("#nextt").click(function () {
    $slider.slick("slickNext");
  });
});

// ADD: When I clicked to this list make filter to this card

document.addEventListener("DOMContentLoaded", function () {
  const catItems = document.querySelectorAll(".cat-item");
  const cardContainers = document.querySelectorAll(".card-container");

  catItems.forEach((item) => {
    item.addEventListener("click", function () {
      const target = this.getAttribute("data-category");

      // Remove active class from all buttons
      catItems.forEach((btn) => btn.classList.remove("active"));
      // Add active class to the clicked button
      this.classList.add("active");

      // Show/hide cards based on the clicked button with smooth transition
      cardContainers.forEach((container) => {
        if (
          target === "all" ||
          container.getAttribute("data-category") === target
        ) {
          container.style.display = "block";
          container.style.maxHeight = "1000px"; // Set a high value for max-height
          // container.style.overflow = "hidden";
        } else {
          container.style.display = "none";
          // container.style.maxHeight = "0";
          // container.style.overflow = "hidden";
        }
      });
    });
  });
});

const sliderWrapper = document.querySelector(".slider-wrapper");
const nextBtn = document.getElementById("nextt");
const prevBtn = document.getElementById("prevv");

// Pause the animation on hover
document.querySelector(".slider").addEventListener("mouseover", () => {
  sliderWrapper.style.animationPlayState = "paused";
});

// Resume the animation when not hovering
document.querySelector(".slider").addEventListener("mouseout", () => {
  sliderWrapper.style.animationPlayState = "running";
});

// Manually control next/prev buttons to skip or reset animation
nextBtn.addEventListener("click", () => {
  sliderWrapper.style.animation = "none"; 
  sliderWrapper.style.transform = "translateX(-100%)"; 
  setTimeout(() => {
    sliderWrapper.style.animation = "slide-infinite 20s linear infinite";
  }, 200);
});

prevBtn.addEventListener("click", () => {
  sliderWrapper.style.animation = "none";
  sliderWrapper.style.transform = "translateX(0)"; 
  setTimeout(() => {
    sliderWrapper.style.animation = "slide-infinite 20s linear infinite";
  }, 500);
});

// Section Success 
const testamonials = document.querySelectorAll('.test-card-h');
const buttons = document.querySelectorAll('.testamonial-btn:not(#btn-next):not(#btn-prev)');
let currentStart = 0;
const itemsPerPage = 2;

function showTestamonials(startIndex) {
  testamonials.forEach((testamonial, index) => {
    if (index >= startIndex && index < startIndex + itemsPerPage) {
      testamonial.classList.add('active');
    } else {
      testamonial.classList.remove('active'); 
    }
  });

  buttons.forEach((button, index) => {
    if (index === (startIndex / itemsPerPage)) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

showTestamonials(currentStart);

document.getElementById('btn-next').addEventListener('click', function () {
  if (currentStart + itemsPerPage < testamonials.length) {
    currentStart += itemsPerPage;
    showTestamonials(currentStart);
  }
});

document.getElementById('btn-prev').addEventListener('click', function () {
  if (currentStart - itemsPerPage >= 0) {
    currentStart -= itemsPerPage;
    showTestamonials(currentStart);
  }
});

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentStart = index * itemsPerPage; 
    showTestamonials(currentStart);
  });
});
