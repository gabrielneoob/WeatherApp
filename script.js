let weather = {
  "apikey": "8dade0dd7e675bf4a3a69f2330890fcd",
  fetchWeather: function (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${this.apikey}`)
      .then((respnse) => respnse.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { description, icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const iconurl = `http://openweathermap.org/img/w/${icon}.png"`;

    //display weather
    document.querySelector('.city').innerText = `${name}`;
    document.querySelector('h1').innerText = `${temp}°C`;
    document.querySelector('.description').innerText = description;
    document.querySelector('.icon').src = iconurl;
    document.querySelector('.humnidity').innerText = `Umidade: ${humidity}%`;
    document.querySelector('.wind').innerText = `Velocidade do vento: ${speed}km/h`


    document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name.toLowerCase().replace('\ \g', '')}')`;
  },

}
const searchBar = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search button');

// events

searchBtn.addEventListener('click', ((e) => {
  e.preventDefault();
  const city = searchBar.value;
  console.log(city)
  weather.fetchWeather(searchBar.value);
}));

searchBar.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const city = searchBar.value;
    console.log(city)
    weather.fetchWeather(searchBar.value);
  }
})


weather.fetchWeather('Brasil');