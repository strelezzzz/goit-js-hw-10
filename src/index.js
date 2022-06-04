import './css/styles.css';
import { fetchCountries } from './js/fetchCountries.js';
import {
  markupCoutnryInfo,
  markupCoutnryList,
  markupCleaner,
} from './js/markup';
// import countryCardsTpl from './countryCards.hbs';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 300;
// ==============================================================

inputField = document.querySelector('#search-box');
inputField.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
// =================================================================
function onInput(e) {
  const input = e.target.value.trim();
  console.log(input);
  if (input === '') {
    markupCleaner();
    return;
  }

  fetchCountries(input)
    .then(country => {
      if (country.length > 10) {
        moreSpecificMessage();
        markupCleaner();
        return;
      }
      if (10 >= country.length && country.length > 1) {
        // markupCleaner();
        markupCoutnryList(country);
        return;
      }
      markupCleaner();
      markupCoutnryInfo(country);
      return;
    })
    .catch(error => {
      console.log(error);
      failureMessage();
    });
}
// ==================================================
function failureMessage() {
  Notify.failure('Oops, there is no country with that name.');
}
function moreSpecificMessage() {
  Notify.info('Too many matches found. Please enter a more specific name.');
}
