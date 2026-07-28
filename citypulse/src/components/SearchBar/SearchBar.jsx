import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

 const handleSearch = () => {
  console.log("Button Clicked");

  const cityName = city.trim();

  if (cityName === "") {
    alert("Please enter a city name.");
    return;
  }

  onSearch(cityName);
  setCity("");
};

  return (
    <section className="search-section">
      <label htmlFor="cityInput">Search City</label>

      <div className="search-box">
        <input
          id="cityInput"
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button onClick={handleSearch}>
          Search
        </button>
      </div>
    </section>
  );
}

export default SearchBar;