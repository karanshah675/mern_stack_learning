let password = document.getElementById("password");

let allChars =
  "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ1234567890!@#$%^&*()";

let copy = document.getElementById("copy");
let gen = document.getElementById("generate");
gen.addEventListener("click", () => {
  let pwd = "";
  let lengthh = 8;
  while (lengthh > pwd.length) {
    pwd += cutstr(allChars.substring(0, 26));
    pwd += cutstr(allChars.substring(26, 52));
    pwd += cutstr(allChars.substring(52, 61));
    pwd += cutstr(allChars.substring(61, allChars.length - 1));

    pwd += allChars[Math.floor(Math.random() * allChars.length)];
  }
  password.value = pwd;
});

const cutstr = (str) => {
  return str[Math.floor(Math.random() * str.length)];
};

copy.addEventListener("click", () => {
  password.select();
  document.execCommand("copy");
});
