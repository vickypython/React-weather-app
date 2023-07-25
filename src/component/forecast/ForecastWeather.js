import React from "react";
import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import "./Forecast.css";
const Week_Days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const ForecastWeather = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = Week_Days.slice(dayInWeek, Week_Days.length).concat(
    Week_Days.slice(0, dayInWeek)
  );

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="disc">{item.weather[0].disc}</label>

                  <label className="min-max">
                    {Math.round(item.main.temp_main)}℃ /
                    {Math.round(item.main.temp_max)}℃
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details">
                <div className="daily-details-item">
                  <label>Pressure</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="daily-details-item">
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="daily-details-item">
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-item">
                  <label>Wind speed</label>
                  <label>{item.wind.speed}m/s</label>
                </div>
                <div className="daily-details-item">
                  <label>Sea level</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-item">
                  <label>feels like</label>
                  <label>{Math.round(item.main.feels_like)}℃</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ForecastWeather;
