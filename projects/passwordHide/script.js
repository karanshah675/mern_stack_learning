let pass = document.querySelector("#pass");
let eye = pass.nextElementSibling;
let str = stringg();
 
function show() { 
 if (pass.type == "password") {
    pass.type = "text";
    eye.setAttribute("class", "fa-solid fa-eye-slash");
  } else {
    pass.type = "password";
    eye.setAttribute("class", "fa-solid fa-eye");
  }
}
