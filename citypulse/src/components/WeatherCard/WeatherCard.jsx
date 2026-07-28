import "./WeatherCard.css";

function WeatherCard(){

    return(

        <section className="weather-card">

            <h2>Select a City</h2>

            <h1>--°C</h1>

            <p>Weather Condition</p>

            <div className="details">

                <div>
                    <h4>Humidity</h4>
                    <p>--%</p>
                </div>

                <div>
                    <h4>Wind</h4>
                    <p>-- km/h</p>
                </div>

                <div>
                    <h4>Feels Like</h4>
                    <p>--°C</p>
                </div>

            </div>

        </section>

    )

}

export default WeatherCard;