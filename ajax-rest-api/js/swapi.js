import tableRowTemplate from "./templates/swapi-table-row.hbs";
// import hbs from "hbs";

const tableBody = document.querySelector("#swapi-planets tbody");

// GET https://swapi.dev/api/people/

// const baseUrl = "https://swapi.dev/api/";
// const baseUrl = "https://swapi.dev/api/people/";
// const baseUrl = "https://swapi.dev/api/people/5";
const baseUrl = "https://swapi.dev/api/planets/";

// fetch(baseUrl, {
//   method: "GET",
// });
fetch(baseUrl)
  .then((res) => {
    console.log(res);
    // console.log(typeof res)  // object
    return res.json();
  })
  .then((data) => {
    console.log(data);
    const markup = data.results
      .map((planet) => tableRowTemplate(planet))
      .join("");

    console.log(markup);
  });
