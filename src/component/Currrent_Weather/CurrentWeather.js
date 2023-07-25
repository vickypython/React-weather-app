import React from "react";
import "./currentweather.css";
const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-disc">{data.weather[0].disc}</p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <p className="temp">{Math.round(data.main.temp)}℃</p>
        <div className="details">
          <div className="para-row">
            <span className="para-label">Details</span>
          </div>
          <div className="para-row">
            <span className="para-label">Feels like</span>
            <span className="para-value">{Math.round(data.main.feels_like)}℃</span>
          </div>
          <div className="para-row">
            <span className="para-label">Wind</span>
            <span className="para-value">{data.wind.speed} m/s</span>
          </div>
          <div className="para-row">
            <span className="para-label">Humidity</span>
            <span className="para-value">{data.main.humidity}%</span>
          </div>
          <div className="para-row">
            <span className="para-label">Pressure</span>
            <span className="para-value">{data.main.pressure}hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
