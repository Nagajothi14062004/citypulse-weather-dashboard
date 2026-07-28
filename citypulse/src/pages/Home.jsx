import { useState } from "react";

import SearchBar from "../components/SearchBar/SearchBar";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import Favorites from "../components/Favorites/Favorites";

import {
  searchCity,
  getCurrentWeather,
} from "../services/weatherApi";

function Home() {

  const [weather, setWeather] = useState(null);

  const handleSearch = async(city)=>{

    try{

      const cityData=await searchCity(city);

      const currentWeather=await getCurrentWeather(
          cityData.latitude,
          cityData.longitude
      );

      setWeather({

        city:cityData.name,

        country:cityData.country,

        ...currentWeather

      });

    }

    catch(error){

      alert(error.message);

    }

  }

  return(

    <>

        <SearchBar onSearch={handleSearch}/>

        <WeatherCard weather={weather}/>

        <Favorites/>

    </>

  )

}

export default Home;