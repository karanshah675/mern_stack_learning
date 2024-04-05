let leftBox = document.querySelector(".left");
let rightBox = document.querySelector(".right");
let list = document.querySelectorAll(".list-item");

list.forEach((li) => {
  li.addEventListener("dragstart", (e) => {
    var selected = e.target;
    rightBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", (e) => {
      rightBox.appendChild(selected);
      selected = null;
    });
    leftBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", (e) => {
      leftBox.appendChild(selected);
      selected = null;
    });
  });
});
 
