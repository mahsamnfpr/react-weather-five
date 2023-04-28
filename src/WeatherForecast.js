import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse(response){
        console.log(response.data);
    }

    const apiKey = "4b3503b2f08a729413c4d33ef1186004"
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">thu</div>
                    <img src={props.data.iconUrl} alt={props.data.description}/>
                    <div className="WeatherForecast-Temperatures">
                        <span className="WeatherForecast-Teperature-max">19°</span>
                        <span className="WeatherForecast-Teperature-min">10°</span>
                    </div>
                </div>
            </div>
        </div>
    );
}