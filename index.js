//Variables for the menu and menu icon
let Menu = document.querySelector(".menu");
let MenuIcon = document.querySelector(".menu i");
const smallMenu = document.querySelector(".small-menu-list");
let isMenuOpen = false;

// Function to handle the menu click event
function handleMenuClick() {
  MenuIcon.classList.toggle("fa-x");
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    smallMenu.classList.add("show");
  } else {
    smallMenu.classList.remove("show");
  }
}
// Toggle the menu icon when clicked
function handleMenuToggle() {
  Menu.addEventListener("click", handleMenuClick);
}

handleMenuToggle();

// HERO CAROUSEL JS

let CarouselCounter = 0;
let HeroCarousels = document.querySelectorAll(".hero-section");
let HeroCarouselLeftBtn = document.querySelector(".btn-left");
let HeroCarouselRightBtn = document.querySelector(".btn-right");

function handleCarousel(index) {
  HeroCarousels.forEach((item, i) => {
    item.classList.remove("active");
    if (i === index) {
      item.classList.add("active");
    }
  });
}

handleCarousel(CarouselCounter);

function handleNext() {
  CarouselCounter = (CarouselCounter + 1) % HeroCarousels.length;
  handleCarousel(CarouselCounter);
}
function handlePrev() {
  CarouselCounter =
    (CarouselCounter - 1 + HeroCarousels.length) % HeroCarousels.length;
  handleCarousel(CarouselCounter);
}
HeroCarouselRightBtn.addEventListener("click", handleNext);
HeroCarouselLeftBtn.addEventListener("click", handlePrev);

// Product page JS
let productCard = document.querySelector(".card");
let productBtn = document.querySelector(".onhoverbtn");
let productBlack = document.querySelector(".blackbackground");

productCard.addEventListener("mouseenter", function handleMousein() {
  productBtn.style.display = "block";
  productBlack.style.display = "block";
  productCard.classList.add("card-img-hover");
  // alert("Mouse in");
});
productCard.addEventListener("mouseleave", function handleMouseout() {
  productBtn.style.display = "none";
  productBlack.style.display = "none";
});
// setInterval(handleNext, 5000);
