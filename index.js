const obj = {
  name: "karan",
  things: {
    skill: "c++",
    book: "deepWork",
  },
};
for (const key in obj) {
    console.log(obj.things[key]);   
}
