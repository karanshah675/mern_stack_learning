let progress = document.getElementById("myRange");
let song = document.getElementById("audio");
let cntrlIcon = document.querySelector(".play").firstElementChild;


song.addEventListener("onloadedmetadata", () => {
  progress.max = song.duration;
  progress.value = song.currenTime;
});
cntrlIcon.addEventListener("click", () => {
  if (cntrlIcon.classList.contains("fa-pause")) {
    song.pause();
    cntrlIcon.classList.remove("fa-pause");
    cntrlIcon.classList.add("fa-play");
  } else {
    song.play();
    cntrlIcon.classList.remove("fa-play");
    cntrlIcon.classList.add("fa-pause");
  }
});
if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}
progress.onchange = () => {
  song.play();
  song.currentTime = progress.value;
  cntrlIcon.classList.remove("fa-play");
  cntrlIcon.classList.add("fa-pause");
};
