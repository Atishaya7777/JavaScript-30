const endpoint = `https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json`;

const cities = [];

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => cities.push(...data));

function findMatch(wordToMatch, cities) {
  return cities.filter((place) => {
    // Here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, "gi"); // g means global => searches through the whole thing, i means case insensitive
    return place.city.match(regex) || place.state.match(regex); // match either the city name or the state name
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatch(this.value, cities);

  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
           <li>
               <span class="name">${cityName}, ${stateName}</span>
               <span class="population">Population: ${numberWithCommas(
                 place.population
               )}</span>
          </li>`;
    })
    .join("");

  if (matchArray.length != 0) {
    suggestions.innerHTML = html;
  } else {
    suggestions.innerHTML = `
    <li>
        <span class="name">Location not found!</span>
   </li>`;
  }
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
