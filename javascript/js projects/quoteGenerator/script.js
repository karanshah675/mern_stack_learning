const qoute =  document.getElementById("qoute")
fetch("https://api.quotable.io/random")
  .then((response) => response.json())
  .then((data) => {
    qoute.innerHTML=data.content
  })
  .catch((err) => {
    console.log(err);
  });
