let date = document.getElementById("date-set");
let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");
let calculate = document.getElementById("calc");

date.max= new Date().toISOString().split("T")[0]

date.addEventListener("input", (e) => {
    let birthDate =  new Date(date.value)
    let m1 = birthDate.getMonth()+1;
    let y1 = birthDate.getFullYear();
    let d1 = birthDate.getDate();
    let today = new Date();
    let m2 = today.getDate()-d1
    console.log(m1 + " " + y1 + " " + d1);
    
});
 c