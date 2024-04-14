//json is javascript objact notation
//this is used to transfer data
// this is how we create json
const user = `{
    "firstname":"karan",
    "lastname":"shah",
    "skils":["html","css","js"]
}`;
let u = {
  name: "karan",
  sname: "shah",
};
//this is looks like js an object but this is json
// we need to conver json into js ovbject for that we use parse method
const userTxt = JSON.parse(user);
//we can js object to json using sringfy
const txt = JSON.stringify(u, ["firstName", "lastName"], 2);
console.log(txt);
console.log(userTxt.skils.join("-"));
