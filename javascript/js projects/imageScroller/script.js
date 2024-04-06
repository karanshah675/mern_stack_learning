let backBtn = document.querySelector("#backBtn");
let nextBtn = document.querySelector("#nextBtn");
let scrollCon = document.querySelector(".gllary");

scrollCon.addEventListener("wheel", (event) => {
  event.preventDefault();
  scrollCon.scrollLeft += event.deltaY * 900;
});

nextBtn.addEventListener("click", () => {
  scrollCon.scrollLeft += 900;
});
backBtn.addEventListener("click", () => {
  scrollCon.scrollLeft -= 900;
});
