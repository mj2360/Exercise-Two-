import React from 'react'; 
import WeatherImage from './WeatherImage';

function WeatherCard({
    cloudiness, 
    currentTemp, 
    highTemp,
    humidity, 
    lowTemp, 
    weatherType, 
    windSpeed,
}) {
    return (
        <section 
          className="WeatherCard"
          style={{backgroundColor: `rgba(150, 150, 150, ${cloudiness / 100})`}}
        
        >

            <div className="CurrentTemperatureWrapper">
                <h2 className="Subheader">Current Temperature</h2>
                <p className="CurrentTemperature">{currentTemp}</p>
            </div>
            <div className="Subtexts"> 
              <div className="WeatherImageWrapper">
                      <WeatherImage weatherType={weatherType} />
              </div>
              <p>
                Weather Type: <strong>{weatherType}</strong>
              </p>
              <p>
                Cloudiness: <strong>{cloudiness}</strong>
              </p>
              <p>
                High Temp: <strong>{highTemp}</strong>
              </p>
              <p>
                Low Temp: <strong>{lowTemp}</strong>
              </p>
              <p>
                Humidity: <strong>{humidity}</strong>
              </p>
          </div>
        </section>
    ); 
}

export default WeatherCard; 