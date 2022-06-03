import './css/styles.css';
import { fetchCountries } from './js/fetchCountries.js';
// import countryCardsTpl from './countryCards.hbs';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 300;
// ==============================================================
countryList = document.querySelector('.country-list');
countryInfo = document.querySelector('.country-info');
inputField = document.querySelector('#search-box');
inputField.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
// =================================================================
function onInput(e) {
  const input = e.target.value.trim();
  console.log(input);
  if (input === '') {
    return;
  }

  fetchCountries(input)
    .then(country => {
      country.map(({ name, capital, population, languages, flags }) => {
        //===============================================
        const markup = `<div class="card">
    <div class="card-flag">
        <img src="${flags.svg}" width = "36px" alt="${name.common} flag">
    </div>
    <div class="card-body">
        <h2 class="card-name">${name.official}</h2>
        <p class="card-text">Capital:${capital}</p>
        <p class="card-population">Population:${population}</p>
        <p class="card-languages">Languages:${Object.values(languages)}</p>
        </div>
    </div>`;
        console.log(markup);
        countryInfo.innerHTML = markup;
      });
    })
    .catch(error => {
      console.log(error);
    });
}

// }

// fetchCountries(name);
