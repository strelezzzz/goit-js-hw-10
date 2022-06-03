import './css/styles.css';
// import countryCardsTpl from './countryCards.hbs';
const DEBOUNCE_DELAY = 300;

// https://restcountries.com/v3.1/name/{name}
// function fetchCountries(name) {

//FILTER RESPONSE
// You can filter the output of your request to include only the specified fields.
//restcountries.com/v2/{service}?fields={field},{field},{field}
//restcountries.com/v2/all?fields=name,capital,currencies

fetch(
  'https://restcountries.com/v3.1/name/brasil?fields=name,capital,population,languages'
)
  .then(response => {
    return response.json();
  })
  .then(country => {
    console.log(country);
    const countryValues = country.map(
      ({ name, capital, population, languages }) => {
        // // ====================
        const markup = `<div class="card">
    <div class="card-flag">
        <img src="" alt="">
    </div>
    <div class="card-body">
        <h2 class="card-name">${name}</h2>
        <p class="card-text">Capital:${capital}</p>
        <p class="card-population">Population:${population}</p>
        <p class="card-languages">Languages:</p>
        </div>
    </div>`;
        console.log(markup);
      }
    );

    // ======================//markup
    //refs.cardContainer.innerHTML = markup;
  })
  .catch(error => {
    console.log(error);
  });
// }

// fetchCountries(name);
