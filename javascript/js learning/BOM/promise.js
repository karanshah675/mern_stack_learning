let p = new Promise((resolve, reject) => {
  let n = 1 + 1;
  if (n == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((msg) => {
  console.log(msg);
}).catch((msg) => {
  console.log(msg);
});

// const obj = (obj1) => {
//   console.log(obj1.surname+" "+obj1.name);
// };

// obj({
//   surname: "shah",
//   name: "karan",
// });
let num=0;
let a = setInterval(() => {
    num++;
  console.log(num);
  if (num == 15) clearInterval(a);
}, 100);
