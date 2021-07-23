import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = 'a93d75de4fb56762f47899aecfc1f7cb';

const getWeather = () => {
    const [weather, setWeather] = useState();
    const [weatherStatus, setWeatherStatus] = useState(false);

    useEffect(() => { 
        if ("geolocation" in navigator) {
            setWeatherStatus(true)
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log(position);
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lng}&appid=${apiKey}`;
                axios.get(url)
                .then(response => {
                    console.log(response); 
                    setWeather(response.data);
                })
                .catch(error => {
                    console.log('weather API data error: ',error);
                }
                );
            });
        } else {
            console.log("Weather not availible");
        }        
    }, [])

    const isEmpty = (obj) => {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    }

    if (weatherStatus) {
        return (
            <div>
                <div className="weather__wrapper">
                    <div className="weather__title">
                        <h1>Live weather in {isEmpty(weather) ? 'Loading...' : weather.name}</h1>
                    </div>
                    <div className="weather-info">
                        {isEmpty(weather) ? 'Loading...' : Math.floor(weather.main.temp)}F
                    </div>
    
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h1>No weather data available</h1>
            </div>
        )
    }
    
};
export default getWeather;