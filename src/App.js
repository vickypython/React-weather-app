import React, { useState } from "react";
import Search from "./component/Search";
import ForecastWeather from "./component/forecast/ForecastWeather";
import CurrentWeather from "./component/Currrent_Weather/CurrentWeather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./Api";

const App = () => {
  const [currentweather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentweatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metrics`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metrics`
    );
    //api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
    Promise.all([currentweatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  console.log(currentweather);
  console.log(forecast);
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentweather &&<CurrentWeather data={currentweather} />}
    {forecast &&<ForecastWeather data={forecast}/>}
    </div>
  );
};

export default App;
