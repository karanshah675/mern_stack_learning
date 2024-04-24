let changMode = document.querySelector(".change-mode");
let changeCount = false;
changMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (!changeCount) {
    changMode.firstElementChild.src = "dark_theme_icon/moon.png";
    changMode.style.background = "#f5f3f3";
    changMode.firstElementChild.classList.add("dark");
    changMode.firstElementChild.classList.remove("light");
    changeCount = true;
  } else {
    changMode.firstElementChild.src = "dark_theme_icon/sun.png";
    changMode.style.background = "#3b3a3a";
    changMode.firstElementChild.classList.remove("dark");
    changMode.firstElementChild.classList.add("light");
    changeCount = false;
  }
});
