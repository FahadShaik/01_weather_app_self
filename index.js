const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=";

const searchCity = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

const getWeatherData = async function (city) {
  const getResponse = await fetch(API_URL + API_KEY + `&q=${city}`);
  if (getResponse.status == 404) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error-message").style.display = "block";
  }
  const data = await getResponse.json();

  const cityName = document.querySelector(".city-name");
  const cityTemperature = document.querySelector(".temperature");
  const wind = document.querySelector(".wind-reading");
  const humidity = document.querySelector(".humidity-reading");
  const weatherImg = document.querySelector(".weather-image");
  const weatherContainer = document.querySelector(".weather");
  const error = document.querySelector(".error-message");

  cityName.innerHTML = data.name;
  cityTemperature.innerHTML = data.main.temp + "°C";
  wind.innerHTML = data.wind.speed + " km/h";
  humidity.innerHTML = data.main.humidity + "°C";

  if (data.weather[0].main === "Clear") {
    weatherImg.src = "./images/clear.png";
  } else if (data.weather[0].main === "Clouds") {
    weatherImg.src = "./images/clouds.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherImg.src = "./images/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    weatherImg.src = "./images/mist.png";
  } else if (data.weather[0].main === "Rain") {
    weatherImg.src = "./images/rain.png";
  } else if (data.weather[0].main === "Snow") {
    weatherImg.src = "./images/snow.png";
  }

  if (data.cod === 200) {
    weatherContainer.style.display = "block";
    error.style.display = "none";
  }
};

searchCity.addEventListener("click", () => {
  getWeatherData(searchInput.value);
});
