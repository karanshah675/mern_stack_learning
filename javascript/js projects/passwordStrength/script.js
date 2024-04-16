let password = document.getElementById("password");
let text = document.getElementById("pass");
let strength = document.getElementById("strength");

password.addEventListener("input", () => {
  if (password.value.length > 0) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
  if (password.value.length < 4) {
    strength.innerHTML = "weak.";
    text.style.color = "red";
    password.style.borderColor = "red";
  } else if (password.value.length >= 4 && password.value.length <= 7) {
    strength.innerHTML = "meduim.";
    text.style.color = "yellow";
    password.style.borderColor = "yellow";
  } else {
    strength.innerHTML = "strong.";
    text.style.color = "green";
    password.style.borderColor = "green";
  }
});
document.querySelector(".btn-submit").addEventListener("click", () => {
  if (password.value.length == 0) {
    alert("enter some value");
  }
  if (strength.innerHTML.includes("weak")) {
    let a = confirm("your password is too weak");
    if (a == true) {
      location.reload();
    }
  } else {
    location.reload();
  }
});
