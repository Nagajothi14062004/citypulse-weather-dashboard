const GEO_URL =
    "https://geocoding-api.open-meteo.com/v1/search";

const WEATHER_URL =
    "https://api.open-meteo.com/v1/forecast";


// ==========================
// Search City
// ==========================

export async function searchCity(city) {

    try {

        const response = await fetch(
            `${GEO_URL}?name=${encodeURIComponent(city)}&count=1`
        );


        if (!response.ok) {

            throw new Error(
                "Unable to search city."
            );

        }


        const data = await response.json();


        if (!data.results || data.results.length === 0) {

            throw new Error(
                "City not found."
            );

        }


        return data.results[0];


    } 
    catch (error) {

        console.log("API ERROR:", error);


        if (
            error.message.includes("Failed to fetch") ||
            error.message.includes("NetworkError") ||
            error.name === "TypeError"
        ) {

            throw new Error(
                "Network error. Please check your internet connection."
            );

        }


        throw error;

    }

}



// ==========================
// Get Current Weather
// ==========================

export async function getCurrentWeather(
    latitude,
    longitude
) {

    try {


        const response = await fetch(

            `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m`

        );



        if (!response.ok) {

            throw new Error(
                "Unable to fetch weather data."
            );

        }



        const data = await response.json();



        if (!data.current) {

            throw new Error(
                "Weather data unavailable."
            );

        }



        return {

            temperature:
            data.current.temperature_2m,


            humidity:
            data.current.relative_humidity_2m,


            windSpeed:
            data.current.wind_speed_10m,


            feelsLike:
            data.current.apparent_temperature,


            condition:
            "Clear Sky"

        };


    } 
    catch (error) {


        console.log("API ERROR:", error);


        if (
            error.message.includes("Failed to fetch") ||
            error.message.includes("NetworkError") ||
            error.name === "TypeError"
        ) {

            throw new Error(
                "Network error. Please check your internet connection."
            );

        }


        throw error;

    }

}