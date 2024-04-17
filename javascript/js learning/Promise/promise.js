// We can create a promise using the Promise constructor. We can create a new promise using the key word new followed by the word Promise and followed by a parenthesis. Inside the parenthesis, it takes a callback function. The promise callback function has two parameters which are the resolve and reject functions.
// syntax
// const promise = new Promise((resolve, reject) => {
//   resolve('success')
//   reject('failure')
// })
const dopromise = (ans) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ans == "yes") {
        resolve("i promise, i will never let you go.");
      } else {
        reject("sorry i can't promise you that");
      }
    }, 2000);
  });
};
//we need to hande the promise using then and catch then for resolve and catch for reject
dopromise("no")
  .then((el) => {
    console.log(el);
  })
  .catch((e) => {
    console.log(e);
  });
