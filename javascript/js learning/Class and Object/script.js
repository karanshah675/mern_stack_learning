//creating a empty class
// class dog{

// }
//creating class with constructor
//what is constructor?
//cons. is used to create bluprint of class
//one class can have only one constructor.
class animal {
  constructor(name) {
    document.write(name + " can eat");
  }
}
//constuctor with parameter
class dog {
  constructor(params,pr) {
    // console.log(this);
    this.params = params;
    this.second=null;
  }
  //we can make function of class also
  print() {
    return this.params;
  }
  // we can create get method 
  get printt(){
    return this.params
  }
//set method is used to set vlaue of class variable
  set value(v){
    return this.second=v;
  }
}
//when we create object of an class constructor will automatically called
//how to create an object we can create object by using new key word
let d = new dog("json");
// console.log(d);
console.log(d.print());
//get method does not required parameter
console.log(d.printt);
console.log(d.value="karan");
