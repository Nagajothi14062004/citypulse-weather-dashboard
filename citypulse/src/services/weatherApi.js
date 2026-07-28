const GEO_BASE_URL = "https://geocoding-api.open-meteo.com/v1/search";

export async function searchCity(cityName) {
  const response = await fetch(
    `${GEO_BASE_URL}?name=${encodeURIComponent(cityName)}&count=1`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch city.");
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found.");
  }

  return data.results[0];
}
const WEATHER_BASE_URL = "https://api.open-meteo.com/v1/forecast";

export async function getCurrentWeather(latitude, longitude) {

  const response = await fetch(
    `${WEATHER_BASE_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch weather.");
  }

  const data = await response.json();

  return data.current;

}