import './App.css';
import { useState} from 'react';

const api = {
  base: 'https://api.openweathermap.org/data/2.5/weather',
  key: '2d44174c3bda1046bc3c2e98c032c40',
  key_new: '0e63e5db0f02a2123de4feed94b878ed',
}

// Convert timezone offset to readable format (e.g., GMT-8)
function convertTimezoneOffset(offset) {
  const hours = Math.abs(offset) / 3600;
  const sign = offset >= 0 ? '+' : '-';
  return `GMT${sign}${String(hours).padStart(2, '0')}`;
}

// Convert Unix timestamp to human-readable time (HH:MM AM/PM)
function convertUnixTimestampToTime(timestamp) {
  const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");

  const searchPressed = () => {
    console.log(search);
    fetch(`${api.base}?q=${search}&units=metric&appid=${api.key_new}`)
      .then(res => {
        if (!res.ok) {
          setWeather(null);
          setError('City not found.');
          console.error('Error fetching data:', error);
        }
        return res.json();
      })
      .then(result => {
        setWeather(result);
      })
      .catch((error) => {
        setWeather(null); 
        setError('Error fetching data. Please try again.');
        console.error('Error fetching data:', error);
      });
  }

  return (
    <div className = "App">
      <h1>Weather app</h1>
      <input
        type="text" 
        placeholder="Search city..."
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={searchPressed}
      />
      <button onClick={searchPressed}>Search</button>
      {error && <div className="error-message">{error}</div>}
      {weather && weather.name && weather.sys && (
        <div className='main-info'>
          <p>{weather.name}, {weather.sys.country}</p>
          <p>{Math.round(weather.main.temp)}°C / {Math.round(weather.main.temp * 9/5 + 32)}°F</p>
          <p>{weather.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="Weather Icon"
          />
        </div>)}
        {weather && weather.name && weather.sys && (
        <div className='additional-info'>
          <div>
            <p>{weather.main.pressure} hPA</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Visibility: {weather.visibility}% </p>
            <p>Clouds: {weather.clouds.all}% </p>
            <p>wind: {weather.wind.speed}km/h - {weather.wind.deg}° </p>
          </div>
          <div>
            <p>Coordinates: {weather.coord.lon}, {weather.coord.lat}</p>
            <p>Time Zone: {convertTimezoneOffset(weather.timezone)}</p>
            <p>Sunrise: {convertUnixTimestampToTime(weather.sys.sunrise)}</p>
            <p>Sunset: {convertUnixTimestampToTime(weather.sys.sunset)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
