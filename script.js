let weather = {
  "apikey": "8dade0dd7e675bf4a3a69f2330890fcd",
  fetchWeather: function (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${this.apikey}`)
      .then((respnse) => respnse.json())
      .then((data) => this.displayWeather(data))
      .catch((e) => alert("Lugar não encontrado"));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { description, icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    //display weather
    document.querySelector('.city').innerText = `${name}`;
    document.querySelector('h1').innerText = `${temp}°C`;
    document.querySelector('.description').innerText = description;
    document.querySelector('.icon').src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    document.querySelector('.humnidity').innerText = `Umidade: ${humidity}%`;
    document.querySelector('.wind').innerText = `Velocidade do vento: ${speed}km/h`


    document.body.style.backgroundImage = `url('https://source.unsplash.com/2560x1080/?${name.toLowerCase().replace('\ \g', '')}')`;
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


weather.fetchWeather('Rio de Janeiro');