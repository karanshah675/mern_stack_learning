let con = document.querySelector(".container");
let newNotes = document.getElementById("createNotes");
let heading = document.querySelector(".heading");
let deletee = document.querySelector(".delete");
let divForNotes = document.querySelector(".notes");

heading.addEventListener("keypress", () => {
  heading.style.color = "black;";
});
newNotes.addEventListener("click", () => {
  let note = document.createElement("div");
  note.className="note"
  note.innerHTML = `<input type="text" class="heading" placeholder="heading" />
          <p
            class="textarea"
            name=""
            id=""
            contenteditable="true"
            placeholder="write something..."
          ></p>`;

  divForNotes.appendChild(note);
});
