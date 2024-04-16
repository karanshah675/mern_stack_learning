let btn = document.querySelectorAll(".btn");
let noti = document.querySelector(".toast-notifications");
btn.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    let success = document.createElement("div");
    let error = document.createElement("div");
    let warning = document.createElement("div");
    success.setAttribute("class", "toast suc");
    success.innerHTML = `<i class="fa-solid fa-circle-check fa-lg" style="color: green"></i>
      <p>successfully submitted.</p>`;
    error.setAttribute("class", "toast err");
    error.innerHTML = `<i class="fa-solid fa-xmark fa-lg" style="color: red"></i>
                <p>please fix the error!</p>`;
    warning.setAttribute("class", "toast wrn");
    warning.innerHTML = `<i
                  class="fa-solid fa-triangle-exclamation fa-lg"
                  style="color: gold"
                ></i>
                <p>something is wrong?</p>`;
    if (e.target.classList.contains("success")) {
      noti.appendChild(success);
    } else if (e.target.classList.contains("error")) {
      noti.appendChild(error);
    } else {
      noti.appendChild(warning);
    }
    setTimeout(() => {
      success.classList.add("remove");
      error.classList.add("remove");
      warning.classList.add("remove");
    }, 2000);
    setInterval(() => {
      if (success.classList.contains("remove")) {
        success.remove();
      } else if (error.classList.contains("remove")) {
        error.remove();
      }
      if (warning.classList.contains("remove")) {
        warning.remove();
      }
    }, 2500);
  });
});
