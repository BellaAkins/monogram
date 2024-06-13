const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.style.width = "50%";
  nav.style.display = 'block'
});

close.addEventListener("click", () => {
  nav.style.width = 0;
  nav.style.display = 'none'
});
