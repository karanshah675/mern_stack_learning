// The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set. In this challenge we will use fetch to request url and APIS. In addition to that let us see demonstrate use case of promises in accessing network resources using the fetch API.
const url = "https://restcountries.com/v2/all"; // countries api
fetch(url)
  //we need to convert resoponse into json format
  //and json format returns another promise.
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
