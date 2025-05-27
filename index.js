// // Query Item
// let X = document.querySelector(".menu-X");
// let Menu = document.querySelector(".menu");
// //Function
// function handleToggle() {
//   Menu.style.display = "none";
//   X.style.display = "block";
// }
// // add event listener
// Menu.addEventListener("click", handleToggle);
// X.addEventListener("click", function () {
//   Menu.style.display = "block" ? "" : "none";
//   X.style.display = "none";
// });
//Toggle class

let Menu = document.querySelector(".menu");
let MenuIcon = document.querySelector(".menu i");
const smallMenu = document.querySelector(".small-menu-list");
let isMenuOpen = false;

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
console.log(MenuIcon);
