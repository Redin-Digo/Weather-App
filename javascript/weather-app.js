function displayTemperature(response) {
  console.log(response.data);

  let windElement = document.querySelector(`#wind`);
  windElement.innerHTML = Math.round(response.data.wind.speed);

  let humidityElement = document.querySelector(`#humidity`);
  humidityElement.innerHTML = response.data.main.humidity;

  let descriptionElement = document.querySelector(`#description`);
  descriptionElement.innerHTML = response.data.weather[0].description;

  let cityElement = document.querySelector(`#city`);
  cityElement.innerHTML = response.data.name;

  let temperatureElement = document.querySelector(`#temperature`);
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = `fbb92b85cb462d93f2e6bd667b26244c`;
let unit = `metric`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Hawaii&appid=${apiKey}&units=${unit}`;

axios.get(apiUrl).then(displayTemperature);
