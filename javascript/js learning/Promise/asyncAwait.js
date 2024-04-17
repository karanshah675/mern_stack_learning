//Async and await is an elegant way to handle promises. It is easy to understand and it clean to write.
const square = async function (n) {
  return n * n;
};
const value = await square(2);
console.log(value);
