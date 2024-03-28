let con = document.querySelector(".container");
let newNotes = document.getElementById("createNotes");
let bold = document.querySelector("#bold");
let italic = document.querySelector("#italic");
let underLine = document.querySelector("#underline");
let deletee = document.querySelector(".delete");
let divForNotes = document.querySelector(".notes");

newNotes.addEventListener("click", () => {
  let p = document.createElement("p");
  p.className = "textarea";
  p.setAttribute("contenteditable", "true");
  let tools = document.createElement("div");
  tools.className = "tools";
  tools.innerHTML = `
            <p id="bold">B</p>
            <p id="italic">I</p>
            <p id="underline">U</p>
            <img src="delete.png" class="delete" width="30" alt="" srcset="" />
        `;
  divForNotes.appendChild(p);
 
});

bold.addEventListener("click", (e) => {
  e.target.parentElement.classList.add("bold");
});
italic.addEventListener("click", (e) => {
  e.target.parentElement.parentElement.firstElementChildclassList.toggle(
    "italic"
  );
});
bold.addEventListener("click", (e) => {
  e.target.parentElement.parentElement.firstElementChild.classList.toggle(
    "bold"
  );
});
