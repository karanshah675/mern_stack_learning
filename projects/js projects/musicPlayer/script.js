let progress = document.getElementById("myRange");
let song = document.getElementById("audio");
let cntrlIcon = document.querySelector(".play").firstElementChild;
let player = document.getElementById("range");
let favBtn = document.querySelector(".fav-heart");

song.addEventListener("onloadedmetadata", () => {
  progress.max = song.duration;
  progress.value = song.currenTime;
});

favBtn.addEventListener("click", () => {
  if (!favBtn.classList.contains("fa-solid")) {
    favBtn.style.color = "#1dd05d";
  } else {
    favBtn.style.color = "white";
  }
  if (favBtn.classList.contains("fa-regular")) {
    favBtn.classList.add("fa-solid");
    favBtn.classList.remove("fa-regular");
  } else {
    favBtn.classList.remove("fa-solid");
    favBtn.classList.add("fa-regular");
  }
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
    var songTime = progress.value * 2.9;
    player.style.width = songTime + "px";
  }, 500);
}
progress.onchange = () => {
  song.play();
  song.currentTime = progress.value;
  cntrlIcon.classList.remove("fa-play");
  cntrlIcon.classList.add("fa-pause");
};
