import "./WeatherCard.css";
import { FaStar, FaCloud } from "react-icons/fa";

function WeatherCard({ weather, addFavorite }) {
  if (!weather) {
    return (
      <section className="weather-card">
        <div className="weather-top">
          <div>
            <h2>Select a City</h2>
            <p className="location">Search for any city</p>
          </div>

          <button className="star-btn">
            <FaStar />
          </button>
        </div>

        <div className="weather-main">
          <FaCloud className="weather-icon" />

          <div>
            <h1 className="temp">--°</h1>
            <p className="condition">Weather Condition</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="weather-card">
      <div className="weather-top">
        <div>
          <h2>{weather.city}</h2>

          <p className="location">
            {weather.country}
          </p>
        </div>

        <button
          className="star-btn"
          onClick={addFavorite}
        >
          <FaStar />
        </button>
      </div>

      <div className="weather-main">

        <FaCloud className="weather-icon" />

        <div>
          <h1 className="temp">
            {weather.temperature}°
          </h1>

          <p className="condition">
            {weather.condition}
          </p>
        </div>

      </div>
    </section>
  );
}

export default WeatherCard;