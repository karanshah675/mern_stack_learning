let num = document.querySelectorAll(".number");
num.forEach((e) => {
  let counter = 0;
  setInterval(() => {
    if (counter == e.dataset.num) {
      clearInterval();
    } else {
      counter += 1;
      e.innerHTML = counter + "%";
    }
  }, 20);
});
// let counter = 0;
// setInterval(() => {
//     if(counter == 65){
//         clearInterval();
//     }else{
//         counter+=1;
//         num.innerHTML=counter+"%";
//     }
// }, 20);
