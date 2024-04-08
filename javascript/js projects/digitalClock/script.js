// let clock = document.querySelector(".clock");
let hour = document.getElementById("hours");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
setInterval(() => {
  let d = new Date();
  let hr = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
  hour.innerHTML = hr < 10 ? "0" + hr : hr;
  min.innerHTML = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
  sec.innerHTML = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
}, 1000);

const today = new Date();

let date = document.getElementById("date");

const weekNames = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

date.firstElementChild.innerHTML =
  weekNames[today.getDay()] +
  ", " +
  today.getDate() +
  " " +
  monthNames[today.getMonth()];
