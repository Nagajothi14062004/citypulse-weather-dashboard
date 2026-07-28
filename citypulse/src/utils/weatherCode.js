export function getWeatherCondition(code){

    switch(code){

        case 0:
            return "Clear Sky";

        case 1:
        case 2:
        case 3:
            return "Partly Cloudy";

        case 45:
        case 48:
            return "Fog";

        case 61:
        case 63:
        case 65:
            return "Rain";

        case 71:
        case 73:
        case 75:
            return "Snow";

        case 80:
        case 81:
        case 82:
            return "Rain Showers";

        case 95:
            return "Thunderstorm";

        default:
            return "Unknown";

    }

}