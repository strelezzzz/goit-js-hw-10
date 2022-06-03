import './css/styles.css';
// import countryCardsTpl from './countryCards.hbs';
const DEBOUNCE_DELAY = 300;

// https://restcountries.com/v3.1/name/{name}
// function fetchCountries(name) {

//FILTER RESPONSE
// You can filter the output of your request to include only the specified fields.
//restcountries.com/v2/{service}?fields={field},{field},{field}
//restcountries.com/v2/all?fields=name,capital,currencies
// =======================================
fetch(
  'https://restcountries.com/v3.1/name/canada?fields=name,capital,population,languages,flags'
)
  .then(response => {
    return response.json();
  })
  .then(country => {
    console.log(country);
    country.map(({ name, capital, population, languages, flags }) => {
      // // ====================
      const markup = `<div class="card">
    <div class="card-flag">
        <img src="${flags.svg}" width = "36px" alt="${name.common} flag">
    </div>
    <div class="card-body">
        <h2 class="card-name">${name.common}</h2>
        <p class="card-text">Capital:${capital}</p>
        <p class="card-population">Population:${population}</p>
        <p class="card-languages">Languages:${Object.values(languages)}</p>
        </div>
    </div>`;
      console.log(markup);
    });

    // ======================//markup
    //refs.cardContainer.innerHTML = markup;
  })
  .catch(error => {
    console.log(error);
  });
// }

// fetchCountries(name);
