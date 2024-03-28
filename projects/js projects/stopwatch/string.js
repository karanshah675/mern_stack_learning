let stopwatch = document.querySelector(".stopwatch");
let [seconds, hours, minutes] = [0, 0, 0];

let time = null;

const random = () => {
  return Math.floor(Math.random() * 255) + 1;
};

const displayTime = () => {
  //   stopwatch.style.boxShadow = `0 0 100px rgba(${random()}, ${random()}, ${random()}, 0.8)`;
  stopwatch.lastElementChild.style.boxShadow = `5px 0 29px 10px rgba(${random()}, ${random()}, ${random()})`;

  if (seconds >= 59) {
    seconds = 0;
    minutes += 1;
    if (minutes >= 59) {
      minutes = 0;
      hours += 1;
    }
  } else {
    seconds += 1;
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  stopwatch.firstElementChild.innerHTML = `${h} : ${m} : ${s}`;
};
const startWatch = () => {
  if (time !== null) {
    clearInterval(time);
  }
  stopwatch.lastElementChild.style.animationName = "shadow";
  stopwatch.lastElementChild.style.animationPlayState = "running";
  time = setInterval(displayTime, 1000);
};
const stopWatch = () => {
  clearInterval(time);
  stopwatch.lastElementChild.style.animationPlayState = "paused";
};
const resetWatch = () => {
  stopwatch.lastElementChild.style.animationName = "none";
  clearInterval(time);
  [seconds, hours, minutes] = [0, 0, 0];
  stopwatch.firstElementChild.innerHTML = `00 : 00 : 00`;
};

let start =
  document.querySelector(".buttons").firstElementChild.nextElementSibling;
let stopp = document.querySelector(".buttons").firstElementChild;
let reset = document.querySelector(".buttons").lastElementChild;

start.addEventListener("click", () => {
  startWatch();
});
stopp.addEventListener("click", () => {
  stopWatch();
});
reset.addEventListener("click", () => {
  resetWatch();
});
