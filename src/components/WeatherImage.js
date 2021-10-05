import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faPooStorm, faSnowflake, faRainbow} from '@fortawesome/free-solid-svg-icons'

function WeatherImage ({ weatherType }) {
    switch (weatherType) {
        case "Clouds":
            return <FontAwesomeIcon icon={faCloud} />;
        case "Clear":
            return <FontAwesomeIcon icon={faSun} />;
        case "Rain" || "Thunderstorms":
            return <FontAwesomeIcon icon={faPooStorm} />;
        case "Snow":
            return <FontAwesomeIcon icon={faSnowflake} />;
        default:
            return <FontAwesomeIcon icon={faRainbow} />;
    }
}

export default WeatherImage; 