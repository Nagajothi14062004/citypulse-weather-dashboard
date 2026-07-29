import "./SearchBar.css";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

function SearchBar({ onSearch, setError }) {

  const [city, setCity] = useState("");

  const handleSearch = () => {

    if (!city.trim()) {
      setError("Please enter a city.");
      return;
    }

    setError("");
    onSearch(city.trim());

  };


  return (

    <section className="search-section">

      <h3>Search a city</h3>


      <div className="search-box">


        <div className="search-input">


          <FiSearch className="search-icon"/>


          <label 
            htmlFor="city-search"
            className="sr-only"
          >
            Search city name
          </label>


          <input

            id="city-search"

            value={city}

            placeholder="Search city..."

            onChange={(e)=>setCity(e.target.value)}

            onKeyDown={(e)=>{

              if(e.key==="Enter"){

                handleSearch();

              }

            }}

          />


        </div>



        <button 
          onClick={handleSearch}
          type="button"
        >
          Search
        </button>


      </div>


     


    </section>

  );

}

export default SearchBar;