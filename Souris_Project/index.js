const mouses = document.querySelectorAll(".mouse");
let scoll = scrollY;
window.addEventListener("scroll", (e) => {
  scoll = scrollY;
});

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = e.y + scoll + "px";
    mouse.style.left = e.x + "px";
  });
});
