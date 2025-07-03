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




