document.querySelector("#todo-add-to-list").addEventListener("click", () => {
  let val =
    document.querySelector("#todo-add-to-list").previousElementSibling.value;

  if (val == "") {
    return;
  } else {
    document.querySelector("#todo-add-to-list").previousElementSibling.value =
      "";
  }

  let con = document.querySelector(".todo");

  let checkList = document.createElement("div");
  checkList.setAttribute("class", "checklist");

  let checkBoxD = document.createElement("div");
  checkBoxD.setAttribute("class", "check-para");

  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("class", "checkbox");
  checkBox.addEventListener("click", (e) => {
    e.target.classList.toggle("checked");
    para.classList.toggle("line");
  });

  let para = document.createElement("p");
  para.innerHTML = val;
  para.setAttribute("class", "todo-data");
  para.addEventListener("click", (e) => {
    e.target.classList.toggle("line");
    checkBox.classList.toggle("checked");
  });

  let icon = document.createElement("i");
  icon.setAttribute("class", "fa-solid fa-xmark");
  icon.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });

  con.append(checkList);
  checkBoxD.append(checkBox);
  checkBoxD.append(para);
  checkList.append(checkBoxD);
  checkList.append(icon);
});
