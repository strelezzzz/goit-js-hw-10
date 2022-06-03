export { fetchCountries };
function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,languages,flags`
  ).then(response => {
    return response.json();
  });
}
// https://restcountries.com/v3.1/name/{name}

//FILTER RESPONSE
// You can filter the output of your request to include only the specified fields.
//restcountries.com/v2/{service}?fields={field},{field},{field}
//restcountries.com/v2/all?fields=name,capital,currencies
// =======================================
