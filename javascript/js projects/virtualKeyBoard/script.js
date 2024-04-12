let display = document.querySelector(".output");
display.value = "karansss";
let btn = document.querySelectorAll(".btn");
let cap = false;
let shift = false;

btn.forEach((e) => {
  e.addEventListener("click", (ele) => {
    if (e.value == "enter") {
      display.value += "\n";
    } else if (e.value == "caps") {
      if (cap == false) {
        cap = true;
        ele.target.style.backgroundColor = "#f3351e";
        ele.target.style.color = "#fff";
      } else {
        cap = false;
        ele.target.style.backgroundColor = "#fff";
        ele.target.style.color = "#000";
      }
    } else if (e.value == "shift") {
      if (shift == false) {
        ele.target.style.backgroundColor = "#f3351e";
        ele.target.style.color = "#fff";
        shift = true;
      } else {
        shift = false;
        ele.target.style.backgroundColor = "#fff";
        ele.target.style.color = "#000";
      }
    } else if (e.value == "back") {
      display.value = display.value.substring(0, display.value.length - 1);
    } else if(ele.target.classList.contains("space")){
        display.value+=" ";
    }else {
      if (cap == true) {
        display.value += e.value.toUpperCase();
      } else if (shift == true && e.parentElement.classList.contains("extra")) {
        display.value += e.nextElementSibling.innerHTML;
      } else {
        display.value += e.value;
      }
    }
  });
});
