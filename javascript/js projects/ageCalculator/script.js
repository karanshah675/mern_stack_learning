let date = document.getElementById("date-set");
let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");
let calculate = document.getElementById("calc");

date.max = new Date().toISOString().split("T")[0];

date.addEventListener("input", (e) => {
  let birthDate = new Date(date.value);
  let y1 = birthDate.getFullYear();
  let m1 = birthDate.getMonth() + 1;
  let d1 = birthDate.getDate();
  let today = new Date();
  let y2 = today.getFullYear();
  let m2 = today.getMonth() + 1;
  let d2 = today.getDate();
  let y3, m3, d3;
  y3 = y2 - y1;
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysOfMonth(y1, m1, 0) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  year.innerHTML = y3;
  month.innerHTML = m3;
  day.innerHTML = d3;
});
