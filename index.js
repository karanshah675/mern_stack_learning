//to add event when drum is clicked
let buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    let button = buttons[i].textContent;
    button = button.trim();
    sound(button);
    addanimation(button);
  });
}
//to add event when key is pressed 
let key = addEventListener("keydown", (click) => {
  sound(click.key);
  addanimation(click.key);
});

//to make sound when drum was clicked or pressed
const sound = (clicked) => {
  switch (clicked) {
    case "a":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      addimage(images[0]);
      break;
    case "s":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      addimage(images[1]);
      break;
    case "d":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      addimage(images[2]);
      break;
    case "f":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      addimage(images[3]);
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      addimage(images[4]);
      break;
    case "k":
      let kick_bass = new Audio("sounds/Bass-Drum-Hit-Level-6b-www.fesliyanstudios.com.mp3");
      kick_bass.play();
      addimage(images[5]);
      break;
    case "l":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      addimage(images[6]);
      break;
    default:
      console.log(buttons);
      break;
  }
};

// to add animation in drums
const addanimation = (keys) => {
  let clickedkey = document.querySelector(`.${keys}`);
  clickedkey.classList.add("pressed");

  setTimeout(() => {
    clickedkey.classList.remove("pressed");
  }, 100);
};

// to add drum stick
let images = document.querySelectorAll("img");
const addimage = (img) => {
  img.setAttribute("src", "images/pngwing.com.png");
  setTimeout(() => {
    img.removeAttribute("src", "images/pngwing.com.png");
  }, 300);
};
