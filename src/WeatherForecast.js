import React, {useState} from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from"./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props){
    let [Loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (Loaded){
        console.log(forecast);
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <WeatherForecastDay data={forecast[0]}/>

                        
                    </div>
                </div>
            </div>
        );

    
    } else {
        const apiKey = "5293d8454b519c30f6f6331f38c85b4c"
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);

    return null;
    
    }
}