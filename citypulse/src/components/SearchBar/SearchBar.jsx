import "./SearchBar.css";

function SearchBar() {
  return (
    <section className="search-section">

      <label>Search City</label>

      <div className="search-box">

        <input
          type="text"
          placeholder="Enter city name"
        />

        <button>
          Search
        </button>

      </div>

    </section>
  );
}

export default SearchBar;