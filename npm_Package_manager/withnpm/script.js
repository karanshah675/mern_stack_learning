const prompt = require("prompt-sync")();

function calculateArea(length, width) {
  return length * width;
}

const length = parseFloat(prompt("Enter the length of the rectangle: "));
const width = parseFloat(prompt("Enter the width of the rectangle: "));
console.log("Area of the rectangle:", calculateArea(length, width));
