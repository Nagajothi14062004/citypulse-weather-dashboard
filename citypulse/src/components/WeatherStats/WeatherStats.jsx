import "./WeatherStats.css";
import { WiHumidity } from "react-icons/wi";
import { FaWind, FaTemperatureHigh } from "react-icons/fa";

function WeatherStats({ weather }) {
  return (
    <section className="weather-stats">

      <div className="stat-card">
        <div className="stat-icon">
          <FaTemperatureHigh />
        </div>

        <h4>Feels Like</h4>

        <h2>
          {weather ? `${weather.feelsLike}°C` : "--°C"}
        </h2>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <FaWind />
        </div>

        <h4>Wind</h4>

        <h2>
          {weather ? `${weather.windSpeed} km/h` : "-- km/h"}
        </h2>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <WiHumidity />
        </div>

        <h4>Humidity</h4>

        <h2>
          {weather ? `${weather.humidity}%` : "--%"}
        </h2>
      </div>

    </section>
  );
}

export default WeatherStats;