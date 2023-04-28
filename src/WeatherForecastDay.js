import React from "react";

export default function WeatherForecastDay(props){
    let iconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`;

    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }
    function minTemperature(){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date (props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day];
    }

    return(
        <div>
            <div className="WeatherForecast-day">{day()}</div>
            <img src={iconUrl} alt={props.data.weather[0].description}/>
            <div className="WeatherForecast-Temperatures">
                <span className="WeatherForecast-Teperature-max">{maxTemperature()}</span>
                <span className="WeatherForecast-Teperature-min">{minTemperature()}</span>
                </div>

        </div>
    )
}