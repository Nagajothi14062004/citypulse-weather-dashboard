import "./Favorites.css";

function Favorites(){

    return(

        <section className="favorites">

            <div className="fav-header">

                <h2>⭐ Favourite Cities</h2>

                <button>
                    Save City
                </button>

            </div>

            <ul>

                <li>No favourite cities yet.</li>

            </ul>

        </section>

    )

}

export default Favorites;