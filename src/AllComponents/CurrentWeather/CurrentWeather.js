import React from 'react';
import Details from './Details';
import './CurrentWeather.css';

const CurrentWeather = ({data}) => {
  return (
   <div className="weather">
        <div className="top">
            <div>
            <p className="city">{data.city}</p>
            <p className="weatherDescription">{data.weather[0].description}</p>
            </div>
        <img alt="weather" className="weatherIcon" src={`AllImages/${data.weather[0].icon}.png`}/>
        </div>
        <div className="bottom">
            <p className="temperature">{Math.round(data.main.temp)}°C</p>
            <div className="details">
                <div className="parameterRow">
                    <span className="parameterLabel">Details</span>
                </div>
                <Details 
                Label="Feels like"
                value={Math.round(data.main.feels_like)}
                unit="°C"  />
                <Details 
                Label="Wind"
                value={Math.round(data.wind.speed)}
                unit="m/s" />
                <Details 
                Label="Humidity"
                value={Math.round(data.main.humidity)}
                unit="%"/>
                <Details 
                Label="Pressure"
                value={Math.round(data.main.pressure)}
                unit=" hPa" />
            </div>
        </div>
   </div>
  )
}

export default CurrentWeather
