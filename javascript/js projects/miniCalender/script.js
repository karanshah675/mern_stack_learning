const today = new Date();

let day = document.getElementById("day");
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");

const weekNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

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

date.innerHTML = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
day.innerHTML = weekNames[today.getDay()];
month.innerHTML = monthNames[today.getMonth()];
year.innerHTML = today.getFullYear();
