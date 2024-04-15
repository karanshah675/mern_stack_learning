let arr = [1, 2, 3, 4,5,7,8,9,10];
// arr.join(" and ");
// arr.splice(1, 3, 44, 55);

//!loop for array foreacha
console.log("array vlaues : ")
arr.forEach((value, index, arr) => {
  console.log(value);
});

//!map: is used for create a new array in one line whithout using loops and all..

// let newArray = arr.map(ele=>{
//     return ele+1;
// })

// newArray.forEach((value, index, arr) => {
//   console.log(value, index, arr);
// });

//!fillter:is used to fillter the value and use that value as we required

// let newArray1 = arr.filter(ele=>{
//     return ele>5;
// })

// newArray1.forEach((value, index, arr) => {
//   console.log(value);
// });

//!reduce:is used to take [0,1],[1,2] and ... it will take next element as fucntion requried and it will return single value
// console.log("sum of array : ")
// let sum=arr.reduce((index1,index2)=>{
//         return index1+index2;
// })

// console.log(sum)

//!Array.form : is used to conver string into array
console.log(Array.from("karan"))