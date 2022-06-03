function fetchCountries(name) {
  fetch(
    `https://restcountries.com/v3.1/name/${name}fields=name,capital,population,languages,flags`
  ).then(response => {
    return response.json();
  });
}
