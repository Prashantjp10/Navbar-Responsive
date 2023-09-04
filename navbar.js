const hamburger = document.querySelector("img");
const navbarItems = document.querySelector("ul");

hamburger.addEventListener("click", () => {
  navbarItems.classList.toggle("slide");
});
