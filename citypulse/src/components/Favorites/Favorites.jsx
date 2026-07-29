import "./Favorites.css";
import { FaTimes } from "react-icons/fa";

function Favorites({
  favorites,
  removeFavorite,
  onSearch,
}) {

  return (
    <section className="favorites">

      <h2>FAVORITES</h2>

      {favorites.length === 0 ? (

        <div className="empty-favorite">
          No Favorites
        </div>

      ) : (

        <div className="favorite-list">

          {
            favorites.map((city) => (

              <div
                className="favorite-item"
                key={city.city}
              >

                <div
                  className="favorite-info"
                  onClick={() => onSearch(city.city)}
                >

                  <h3>
                    {city.city}
                  </h3>

                  <p>
                    {city.country}
                  </p>

                </div>


                <button
                  className="delete-btn"
                  onClick={() => removeFavorite(city.city)}
                >

                  <FaTimes />

                </button>


              </div>

            ))
          }

        </div>

      )}

    </section>
  );
}

export default Favorites;