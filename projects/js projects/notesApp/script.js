let con = document.querySelector(".container");
let newNotes = document.getElementById("createNotes");
let heading = document.querySelector(".heading");
let deletee = document.querySelector(".delete");
let divForNotes = document.querySelector(".notes");

heading.addEventListener("keypress", () => {
  heading.style.color = "black;";
});
newNotes.addEventListener("change", () => {
  let p = document.createElement("p");
  p.className = "textarea";
  p.setAttribute("contenteditable", "true");

  divForNotes.appendChild(p);
});
