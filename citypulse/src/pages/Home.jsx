import { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar/SearchBar";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import Favorites from "../components/Favorites/Favorites";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import WeatherStats from "../components/WeatherStats/WeatherStats";

import {
  searchCity,
  getCurrentWeather,
} from "../services/weatherApi";

import {
  getFavorites,
  saveFavorites,
} from "../utils/storage";

import "./Home.css";

function Home() {

  const [weather, setWeather] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleSearch = async (city) => {

    try {

      setLoading(true);
      setError("");

      const cityData = await searchCity(city);

      const currentWeather = await getCurrentWeather(
        cityData.latitude,
        cityData.longitude
      );

      setWeather({
        city: cityData.name,
        country: cityData.country,
        latitude: cityData.latitude,
        longitude: cityData.longitude,
        ...currentWeather,
      });

    } catch (err) {

    console.log("Error:", err.message);

    setError(
        err.message || "Something went wrong"
    );

    setWeather(null);

} finally {

      setLoading(false);

    }

  };

  const addFavorite = () => {

    if (!weather) {

      setError("Search a city first.");
      return;

    }

    const exists = favorites.some(
      (item) => item.city === weather.city
    );

    if (exists) {

      setError("City already exists in favorites.");
      return;

    }

    const updated = [...favorites, weather];

    setFavorites(updated);

    saveFavorites(updated);

  };

  const removeFavorite = (cityName) => {

    const updated = favorites.filter(
      (item) => item.city !== cityName
    );

    setFavorites(updated);

    saveFavorites(updated);

  };

  return (

    <main className="container">

      <SearchBar
        onSearch={handleSearch}
        setError={setError}
      />

      {loading && <Loading />}

      {error && <Error message={error} />}

      <section className="dashboard">

        <div className="dashboard-left">

          {!loading && !weather ? (

            <section className="empty-state">

              <div className="empty-icon">
                🔎
              </div>

              <h2>Start with a city</h2>

              <p>
                Search above to see current
                temperature, wind, humidity
                and the next five days.
              </p>

            </section>

          ) : (

            <>
              <WeatherCard
                weather={weather}
                addFavorite={addFavorite}
              />

              <WeatherStats
                weather={weather}
              />
       
            </>

          )}

        </div>

        <div className="dashboard-right">

          <Favorites
            favorites={favorites}
            removeFavorite={removeFavorite}
            onSearch={handleSearch}
          />

        </div>

      </section>

    </main>

  );

}

export default Home;