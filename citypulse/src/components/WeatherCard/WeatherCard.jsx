import "./WeatherCard.css";

import { getWeatherCondition } from "../../utils/weatherCode";

function WeatherCard({ weather }) {

  if (!weather) {

    return (

      <section className="weather-card">

        <h2>Select a City</h2>

      </section>

    );

  }

  return (

    <section className="weather-card">

      <h2>

        {weather.city}, {weather.country}

      </h2>

      <h1>

        {weather.temperature_2m}°C

      </h1>

      <p>

        {getWeatherCondition(weather.weather_code)}

      </p>

      <div className="details">

        <div>

          <h4>Humidity</h4>

          <p>

            {weather.relative_humidity_2m}%

          </p>

        </div>

        <div>

          <h4>Wind</h4>

          <p>

            {weather.wind_speed_10m} km/h

          </p>

        </div>

      </div>

    </section>

  );

}

export default WeatherCard;