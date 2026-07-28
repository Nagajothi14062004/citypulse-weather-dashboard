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