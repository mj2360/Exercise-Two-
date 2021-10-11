import React, { useEffect, useMemo, useState } from "react";
import axios from 'axios'; 
import { useLocation } from "react-router-dom"
import WeatherCard from "../components/WeatherCard";
import {API_KEY} from "../components/API_KEY";

function useQuery(){
    return new URLSearchParams(useLocation().search)
}

function Home(){
    const[city, setCity] = useState(); 
    const [weatherData,setWeatherData] = useState();
    let query = useQuery();

    useEffect(() => {
        const cityValue = query.get("city"); 
        setCity(cityValue); 
    }, [query]); 

    useEffect(() => {
     if(city) {
        axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
        )
        .then(function (response) {
          // handle success
          setWeatherData(response.data);
        })
        .catch(function (error) {
          // handle error
          console.warn(error);
        });
     }
    }, [city]); 
    const{
        cloudiness, 
        currentTemp, 
        highTemp, 
        humidity, 
        lowTemp, 
        weatherType, 
        windSpeed, 
    } = useMemo(() => {
        if(!weatherData) return{};

    return {
        cloudiness: weatherData.clouds.all, 
        currentTemp: Math.round(weatherData.main.temp), 
        highTemp: Math.round(weatherData.main.temp_max), 
        humidity: weatherData.main.humidity, 
        lowTemp: Math.round(weatherData.main.temp_min), 
        weatherType: weatherData.weather[0].main,
        windSpeed: weatherData.wind.speed,
    }
}, [weatherData])



    return(
        <main className="App">
            <header>
               <nav className="Navigation">
                    <a href="/?city=cambridge" className={city === "cambridge" && "Active"}>Cambridge</a>
                    <a href="/?city=accra" className={city === "accra" && "Active"}>Accra</a>
                    <a href="/?city=barcelona" className={city === "barcelona" && "Active"}>Barcelona</a>
                    <a href="/?city=shanghai" className={city === "shanghai" && "Active"}>Shanghai</a>
                </nav>
            </header>
            {city && (
                <>
                <h1 className="City">{city}</h1>
                <WeatherCard 
                    cloudiness={cloudiness}
                    currentTemp={currentTemp}
                    highTemp={highTemp}
                    humidity={humidity}
                    lowTemp={lowTemp}
                    weatherType={weatherType}
                    windSpeed={windSpeed}

                />
                </>
            )}
        </main>
    )
}

export default Home; 