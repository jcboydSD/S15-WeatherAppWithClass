// handles
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

// function to update ui
const updateUI = (data) => {
  // destructure properties
  const { cityDets, weather } = data;
  // update day/night image with ternary operator
  let timeSrc = weather.IsDayTime ? 'img/day.webp' : 'img/night.webp';
  time.setAttribute('src', timeSrc);
  // set icon image variable
  const iconSrc = `img/weatherIcons/${weather.WeatherIcon}.png`;
  // update details template including icon image
  details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="icon mx-auto text-center">
      <img src="${iconSrc}">
    </div>
    <div class="temperature my-4">
        <span>${weather.Temperature.Imperial.Value}</span>
        <span>&deg;F = </span>
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
  `;
  // remove d-none class if present
  if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
  }
};

// get city name upon submit and call function
cityForm.addEventListener('submit', e => {
  e.preventDefault();
  // get city name (value)
  const city = cityForm.city.value.trim();
  cityForm.reset();
  // update the ui with new city
  forecast.updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
  // set local storage
  localStorage.setItem('city', city);
});

// check for city name in local storage
if(localStorage.getItem('city')){
  forecast.updateCity(localStorage.getItem('city')) 
    .then(data => updateUI(data))
    .catch(err => console.log(err)); 
}