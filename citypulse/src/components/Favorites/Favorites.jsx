import "./Favorites.css";

function Favorites({
  favorites,
  addFavorite,
  removeFavorite,
  onSearch,
}) {

  return (

    <section className="favorites">

      <div className="favorite-header">

        <h2>⭐ Favourite Cities</h2>

        <button onClick={addFavorite}>
          Save City
        </button>

      </div>

      {favorites.length === 0 ? (

        <p>No favourite cities yet.</p>

      ) : (

        <ul>

          {favorites.map((city) => (

            <li key={city.city}>

              <span
                onClick={() => onSearch(city.city)}
                style={{ cursor: "pointer" }}
              >
                {city.city}
              </span>

              <button
                onClick={() => removeFavorite(city.city)}
              >
                ❌
              </button>

            </li>

          ))}

        </ul>

      )}

    </section>

  );

}

export default Favorites;