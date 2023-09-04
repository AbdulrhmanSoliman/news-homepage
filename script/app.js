const manuIcon = document.querySelector(".manu__icon");
const overlay = document.querySelector(".overlay");

manuIcon.onclick = function () {
  this.classList.toggle("active");
  overlay.classList.toggle("on");
};
