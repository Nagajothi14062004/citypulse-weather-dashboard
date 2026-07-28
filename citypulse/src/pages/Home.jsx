import { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar/SearchBar";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import Favorites from "../components/Favorites/Favorites";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";

import {
  searchCity,
  getCurrentWeather,
} from "../services/weatherApi";

import {
  getFavorites,
  saveFavorites,
} from "../utils/storage";

function Home() {
  // Current weather
  const [weather, setWeather] = useState(null);

  // Favorite cities
  const [favorites, setFavorites] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(false);

  // Error message
  const [error, setError] = useState("");

  // Load favorites on page load
  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  // Search city
  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError("");

      // Get latitude & longitude
      const cityData = await searchCity(city);

      // Get weather
      const currentWeather = await getCurrentWeather(
        cityData.latitude,
        cityData.longitude
      );

      // Store weather
      setWeather({
        city: cityData.name,
        country: cityData.country,
        latitude: cityData.latitude,
        longitude: cityData.longitude,
        ...currentWeather,
      });
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // Save favorite
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

    const updatedFavorites = [...favorites, weather];

    setFavorites(updatedFavorites);

    saveFavorites(updatedFavorites);

    setError("");
  };

  // Remove favorite
  const removeFavorite = (cityName) => {
    const updatedFavorites = favorites.filter(
      (item) => item.city !== cityName
    );

    setFavorites(updatedFavorites);

    saveFavorites(updatedFavorites);
  };

  return (
    <main className="container">

      <SearchBar
        onSearch={handleSearch}
        loading={loading}
      />

      {loading && <Loading />}

      <Error message={error} />

      <WeatherCard weather={weather} />

      <Favorites
        favorites={favorites}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
        onSearch={handleSearch}
      />

    </main>
  );
}

export default Home;