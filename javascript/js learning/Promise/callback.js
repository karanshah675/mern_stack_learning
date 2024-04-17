// Callback Hell = Situation in JavaScript where callbacks are nested within other callbacks to the degree where the code is difficult to read. Old pattern to handle asynchronous functions. Use Promises + async/await to avoid Callback Hell

const call = (callback) => {
  let skill = ["html", "css", "js"];
  //here we called that function which we passed in argument
  callback(false, skill);
};
function callback(err, skill) {
  if (err) {
    return console.log(err);
  } else {
    return console.log(skill);
  }
}
//here we passed function as argument
call(callback);
