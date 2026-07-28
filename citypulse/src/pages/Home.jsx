import { useState } from "react";

import SearchBar from "../components/SearchBar/SearchBar";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import Favorites from "../components/Favorites/Favorites";

import { searchCity } from "../services/weatherApi";

function Home() {

  const [cityData, setCityData] = useState(null);

  const handleSearch = async (city) => {

    try {

      const data = await searchCity(city);

      console.log(data);

      setCityData(data);

    } catch (error) {

      alert(error.message);

    }

  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      <WeatherCard />

      <Favorites />
    </>
  );

}

export default Home;