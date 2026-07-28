import SearchBar from "../components/SearchBar/SearchBar";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import Favorites from "../components/Favorites/Favorites";

function Home() {

  const handleSearch = (city) => {
    console.log("Searching for:", city);
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