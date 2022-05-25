// Sidebar
const sidebar = document.querySelectorAll(".sidebar");
const aside = document.querySelector("aside");
const themetoggler = document.querySelector(".theme-toggler");
for (i = 0; i < 9; i++) {
  sidebar[i].addEventListener("click", (e) => {
    e.target.classList.toggle("active");
  });
}
console.log(themetoggler);
menuBtn.addEventListener("click", () => {
  aside.style.transform = "translateX(0px)";
});
closeBtn.addEventListener("click", () => {
  aside.style.transform = "translateX(-300px)";
});

themetoggler.addEventListener("click", () => {
  sun.classList.toggle("active");
  moon.classList.toggle("active");
  document.body.classList.toggle("dark-theme");
});
