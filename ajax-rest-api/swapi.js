console.log("hello")

// GET https://swapi.dev/api/people/

const baseUrl = "https://swapi.dev/api/";

// fetch(baseUrl, {
//   method: "GET",
// });
fetch(baseUrl).then((res) => {
  console.log(res);
  // console.log(typeof res)  // object
  return res.json()
}).then(data => console.log(data));
