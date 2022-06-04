export { markupCoutnryInfo, markupCoutnryList, markupCleaner };
// ===========================
countryList = document.querySelector('.country-list');
countryInfo = document.querySelector('.country-info');
// ===========================
function markupCoutnryInfo(obj) {
  obj.map(({ name, capital, population, languages, flags }) => {
    const markup = `<div class="country-info">
    <div class="card-flag">
        <img src="${flags.svg}" width = "55px" alt="${name.official} flag">
        <h2 class="card-name">${name.official}</h2>
    </div>
    <div class="card-body">
        <p class="card-text"><span class="values">Capital: </span>${capital}</p>
        <p class="card-population"><span class="values">Population: </span>${population}</p>
        <p class="card-languages"><span class="values">Languages: </span>${Object.values(
          languages
        )}</p>
        </div>
    </div>`;
    console.log(markup);
    countryInfo.innerHTML = markup;
  });
}
// =================================
function markupCoutnryList(obj) {
  const markup = obj
    .map(
      ({ name, flags }) =>
        `<div class="country-list">
            <img src="${flags.svg}" width = "34px" alt="${name.official} flag">
            <span class="card-name">${name.official}</span>
        </div>`
    )
    .join('');
  console.log(markup);
  countryInfo.innerHTML = markup;
}
// =================================
function markupCleaner() {
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
}
