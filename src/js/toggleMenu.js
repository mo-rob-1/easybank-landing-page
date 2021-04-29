const button = document.querySelector("#toggle_btn");

button.addEventListener("click", (e) => {
  document.querySelector(".show-nav").classList.toggle("header__nav");
});
