import { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar/SearchBar";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import Favorites from "../components/Favorites/Favorites";

import {
  searchCity,
  getCurrentWeather,
} from "../services/weatherApi";

import {
  getFavorites,
  saveFavorites,
} from "../utils/storage";

function Home() {
  // Current weather state
  const [weather, setWeather] = useState(null);

  // Favorite cities state
  const [favorites, setFavorites] = useState([]);

  // Load favorites when app starts
  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  // Search city and fetch weather
  const handleSearch = async (city) => {
    try {
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
    } catch (error) {
      alert(error.message);
    }
  };

  // Save favorite city
  const addFavorite = () => {
    if (!weather) {
      alert("Search a city first.");
      return;
    }

    const exists = favorites.some(
      (item) => item.city === weather.city
    );

    if (exists) {
      alert("City already added.");
      return;
    }

    const updatedFavorites = [...favorites, weather];

    setFavorites(updatedFavorites);

    saveFavorites(updatedFavorites);
  };

  // Remove favorite city
  const removeFavorite = (cityName) => {
    const updatedFavorites = favorites.filter(
      (item) => item.city !== cityName
    );

    setFavorites(updatedFavorites);

    saveFavorites(updatedFavorites);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      <WeatherCard weather={weather} />

      <Favorites
        favorites={favorites}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
        onSearch={handleSearch}
      />
    </>
  );
}

export default Home;