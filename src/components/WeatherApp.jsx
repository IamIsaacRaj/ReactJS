import { useEffect, useState } from "react";
import axios from "axios";

const WeatherApp = () => {
  const [city, setCity] = useState("Hyderabad");
  const [weather, setWeather] = useState(null);

  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.log("Error fetching weather:", error);
    }
  };
  const getWindDescription = (speed) => {
    if (speed < 1) return "Calm 🌿";
    if (speed < 5) return "Light Breeze 🍃";
    if (speed < 10) return "Moderate Wind 🌬️";
    return "Strong Wind 💨";
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  return (
    <div>
      <h1>🌤 WeatherApp</h1>
      <input
        type="text"
        placeholder="Enter the city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {weather && (
        <div>
          <h2>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="Weather Icon"
              width="50"
              height="50"
              style={{ verticalAlign: "middle", marginRight: "10px" }}
            />
            {weather.name},{weather.sys.country}
          </h2>
          <p>🌡Temp: {weather.main.temp}°C</p>
          <p>🌡Temp feels like: {weather.main.feels_like}°C</p>
          <p>
            ⛅ Condition:{weather.weather[0].main},
            {weather.weather[0].description}
          </p>
          <p>
            💨 Wind: {weather.wind.speed} m/s (
            {(weather.wind.speed * 3.6).toFixed(1)} km/h) -{" "}
            {getWindDescription(weather.wind.speed)}
          </p>
          <p>🥵 Humidity: {weather.main.humidity}%</p>
          <p>🌫️ Air Pressure: {weather.main.pressure} hPa</p>
          <p>⛅ Cloudiness: {weather.clouds.all}%</p>
          <p>
            🌧 Rain:{" "}
            {weather.rain?.["1h"] ? `${weather.rain["1h"]} mm` : "No rain"}{" "}
          </p>
          <p>
            ❄ Snow:{" "}
            {weather.snow?.["1h"] ? `${weather.snow["1h"]} mm` : "No snow"}{" "}
          </p>
          <p>🌅 Sunrise: {formatTime(weather.sys.sunrise)}</p>
          <p>🌇 Sunset: {formatTime(weather.sys.sunset)}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
