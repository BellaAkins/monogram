const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.style.width = "60%";
  nav.style.display = "block";
});

close.addEventListener("click", () => {
  nav.style.width = 0;
  nav.style.display = "none";
});
/*
const shopNowBtn = document.getElementById("shopnow");
const shoplink = document.getElementById("shoplink");
shopNowBtn.addEventListener("click", () => {
  shoplink.style.display = "block";
  shopNowBtn.style.display = 0;
});*/
