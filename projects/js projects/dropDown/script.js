let select = document.querySelector(".selection");
let option = document.querySelectorAll(".option");
let menu = document.querySelector(".options");

select.addEventListener("click", () => {
  if (select.lastElementChild.classList.contains("fa-angle-down")) {
    menu.style.visibility = "visible";
  
    select.lastElementChild.classList.remove("fa-angle-down");
    select.lastElementChild.classList.add("fa-angle-up");
  } else {
    menu.style.visibility = "hidden";
   
    select.lastElementChild.classList.add("fa-angle-down");
    select.lastElementChild.classList.remove("fa-angle-up");
  }
});
option.forEach((e) => {
    console.log(e);
  e.addEventListener("click", (ele) => {
    select.firstElementChild.innerHTML = e.lastElementChild.innerHTML;
    
  });
});
