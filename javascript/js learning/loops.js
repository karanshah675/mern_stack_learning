//for loop
console.log("for loop");
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//while loop
console.log("while loop");
let j=0;
while(j<=5){
    console.log(j);
    j++;
}
//do-while loop
console.log("do-while loop");
do{
    console.log(j);
    j--;
}while(j>=0);
//for-in use for object 
console.log("for in loop");
let obj={
    "name":"karan",
    "surname":"shah",
    "roll no":33
}
for (const key in obj) {
  console.log(key);
}
//for-of use for array
console.log("for of loop");
for (const iterator of "karan") {
    console.log(iterator);
}