const header = document.querySelector(".head2");
console.log(header);
const burger = document.querySelector(".burger");
window.addEventListener("scroll", (e) => {
  console.log(scrollY);
  if (scrollY > 65) {
    header.classList.add("active");
    window.screenY = "548px";
  } else {
    header.classList.remove("active");
  }
});

burger.addEventListener("click", () => {
  
});
