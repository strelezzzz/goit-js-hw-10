export { fetchCountries };
function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,languages,flags`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status); //явне створення помилки, щоб обробити невдалий HTTP-запит в блоці catch().
    }
    return response.json();
  });
}
// https://restcountries.com/v3.1/name/{name}

//FILTER RESPONSE
// You can filter the output of your request to include only the specified fields.
//restcountries.com/v2/{service}?fields={field},{field},{field}
//restcountries.com/v2/all?fields=name,capital,currencies
// =======================================
