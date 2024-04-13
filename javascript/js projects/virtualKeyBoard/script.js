let display = document.querySelector(".output");
let btn = document.querySelectorAll(".btn");
let cap = false;
let shift = false;
let audio = new Audio("keypress.mp3");

const capsCheck = (ele) => {
  if (cap == false) {
    cap = true;
    ele.target.style.backgroundColor = "#f3351e";
    ele.target.style.color = "#fff";
  } else {
    cap = false;
    ele.target.style.backgroundColor = "#FB6D48";
    ele.target.style.color = "#000";
  }
};

const shiftCheck = (ele) => {
  if (shift == false) {
    ele.target.style.backgroundColor = "#135D66";
    ele.target.style.color = "#fff";
    shift = true;
  } else {
    shift = false;
    ele.target.style.backgroundColor = "#77B0AA";
    ele.target.style.color = "#000";
  }
};
const clickAdd = (ele) => {
  if (!ele.classList.contains("click")) {
    ele.classList.add("click");
    audio.play();
  }
  setTimeout(() => {
    ele.classList.remove("click");
  }, 100);
};

btn.forEach((e) => {
  e.addEventListener("click", (ele) => {
    if (e.value == "enter") {
      display.value += "\n";
      clickAdd(e);
    } else if (e.value == "caps") {
      capsCheck(ele);
      clickAdd(e);
    } else if (e.value == "shift") {
      shiftCheck(ele);
      clickAdd(e);
    } else if (e.value == "back") {
      display.value = display.value.substring(0, display.value.length - 1);
      clickAdd(e);
    } else if (ele.target.classList.contains("space")) {
      display.value += " ";
      clickAdd(e);
    }else if(e.classList.contains("meta")){
      clickAdd(e);
      return;
    } 
    else {
      if (shift == true && e.parentElement.classList.contains("extra")) {
        display.value += e.nextElementSibling.innerHTML;
        clickAdd(e);
      } else if (cap == true) {
        display.value += e.value.toUpperCase();
        clickAdd(e);
      } else {
        display.value += e.value;
        clickAdd(e);
      }
    }
  });
});
