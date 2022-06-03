import './css/styles.css';
import { fetchCountries } from './js/fetchCountries.js';
// import countryCardsTpl from './countryCards.hbs';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notiflix from 'notiflix';
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
    failureMessage();
    moreSpecificMessage();
    return;
  }

  fetchCountries(input)
    .then(country => {
      country.map(({ name, capital, population, languages, flags }) => {
        //===============================================
        const markup = `<div class="card">
    <div class="card-flag">
        <img src="${flags.svg}" width = "55px" alt="${name.official} flag">
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

function failureMessage() {
  Notiflix.Notify.failure('Oops, there is no country with that name.');
}
function moreSpecificMessage() {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}
