let weather = {
  "apikey": "8dade0dd7e675bf4a3a69f2330890fcd",
  fetchWeather: function (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apikey}`)
      .then((respnse) => respnse.json())
      .then((data) => console.log(data));
  },
  displayWeather: function (data) {

  }

}
const searchBar = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search button');

// events

searchBtn.addEventListener('click', ((e) => {
  e.preventDefault();
  const city = searchBar.value;
  console.log(city)
  weather.fetchWeather(searchBar.value);
}))