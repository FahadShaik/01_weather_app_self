const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=";

const API_KEY = "0689c82ef7ed513b112b24ce8c10c23e";

const searchCity = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

const getWeatherData = async function (city) {
  const getResponse = await fetch(API_URL + API_KEY + `&q=${city}`);
  const data = await getResponse.json();
  console.log(data);

  const cityName = document.querySelector(".city-name");
  const cityTemperature = document.querySelector(".temperature");
  const wind = document.querySelector(".wind-reading");
  const humidity = document.querySelector(".humidity-reading");

  cityName.innerHTML = data.name;
  cityTemperature.innerHTML = data.main.temp + "°C";
  wind.innerHTML = data.wind.speed + " km/h";
  humidity.innerHTML = data.main.humidity + "°C";
};

searchCity.addEventListener("click", () => {
  getWeatherData(searchInput.value);
});
