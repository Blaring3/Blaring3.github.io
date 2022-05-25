const burgerContainer = document.querySelector(".burger-container");

window.addEventListener("scroll", (e) => {
  if (scrollY >= 65) {
    nav.classList.add("fixed-nav");
  } else if (scrollY < 65) {
    nav.classList.remove("fixed-nav");
  }
  burgerContainer.classList.remove("active");
  burgerContainer.style.top = `${scrollY}px`;
});

icon.addEventListener("click", () => {
  burgerContainer.classList.toggle("active");
});
