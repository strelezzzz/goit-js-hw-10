export { markupCoutnryInfo, markupCoutnryList, markupCleaner };

function markupCoutnryInfo(obj) {
  obj.map(({ name, capital, population, languages, flags }) => {
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
}
function markupCoutnryList(obj) {
  const markup = obj
    .map(
      ({ name, flags }) =>
        `<div class="card">
         <img src="${flags.svg}" width = "34px" alt="${name.official} flag">
         <span class="card-name">${name.official}</span>
       </div>`
    )
    .join('');
  console.log(markup);
  countryInfo.innerHTML = markup;
}

function markupCleaner() {
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
}
