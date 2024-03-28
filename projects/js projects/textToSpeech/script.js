let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");
let listen = document.querySelector("button");
let div = document.createElement("div");
let clicked = true;
// let i =document.createElement("i");
// i.setAttribute("class", "fa-solid fa-play fa-lg");
// i.style.color="#fff";
div.setAttribute("class", "wave");
div.innerHTML = `<img src="first-wave.svg" alt="" />
            <img src="secondwave.svg" alt="" />`;
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});
listen.addEventListener("click", () => {
  if (!document.querySelector("textarea").value == "") {
    if (clicked) {
      listen.style.padding = "0";
      listen.firstElementChild.remove();
      listen.innerText = "";
      listen.append(div);
      speech.text = document.querySelector("textarea").value;
      window.speechSynthesis.speak(speech);
      clicked = false;
    } else {
      listen.firstElementChild.remove();
      listen.innerHTML = ` <i class="fa-solid fa-play fa-lg" style="color: #fff"></i>Listen`;
      clicked = true;
      listen.style.padding = "10px 30px";
      document.querySelector("textarea").value = "";
    }
  } else {
    return;
  }
});
let clickedForSelect = true;
voiceSelect.addEventListener("click", () => {
  if (clickedForSelect) {
    voiceSelect.nextElementSibling.style.transform = "rotate(180deg)";
    voiceSelect.nextElementSibling.style.transition = "transform 0.4s ease";
    clickedForSelect = false;
  } else {
    voiceSelect.nextElementSibling.style.transition = "transform 0.4s ease";
    voiceSelect.nextElementSibling.style.transform = "rotate(0deg)";
    clickedForSelect = true;
  }
});
let textarea = document.querySelector("textarea");
textarea.addEventListener("input", () => {
  if (textarea.value == "") {
    listen.firstElementChild.remove();
    listen.innerHTML = ` <i class="fa-solid fa-play fa-lg" style="color: #fff"></i>Listen`;
    listen.style.padding = "10px 30px";
    clicked = true;
  }
});
