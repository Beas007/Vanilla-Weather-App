function displayTemprature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#showCity");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let highElement = document.querySelector("#high");
  let lowElement = document.querySelector("#low");
  let feelsElement = document.querySelector("#feels");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  highElement.innerHTML = Math.round(response.data.main.temp_max);
  lowElement.innerHTML = Math.round(response.data.main.temp_min);
  feelsElement.innerHTML = Math.round(response.data.main.feels_like);
}

let apiKey = "20ac730f4e6b3e4ccfed8e3f88036646";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Durham&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemprature);
