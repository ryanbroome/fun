import React, { useState, useEffect, useContext } from "react";
import WeatherApi from "./api/WeatherApi";
import weather from "./WeatherExample";

const WeatherPage = () => {
  const [state, setState] = useState(9);

  // async function fetchWeather() {
  //   const res = await WeatherApi.getWeather();
  //   setWeather(res);
  // }
  // fetchWeather();

  function loggedOut() {
    return (
      <div>
        <h1>Hello?</h1>
        <p>What is the weather today?</p>
      </div>
    );
  }

  function loggedIn(weather) {
    const rainChances = weather.days.map((day) => {
      return day.hours.map((hour) => {
        const hourTime = hour.datetime;
        const chanceOfRain = hour.precipprob;
        return `${chanceOfRain}% - ${hourTime.slice(0, 5)}`;
      });
    });
    const flattenedRainChances = rainChances.flat();

    for (const day of weather.days) {
      for (const hour of day.hours) {
        console.log(`${hour.datetime} - ${hour.precipprob}%`);
        // You can perform any operations on each hour object here
      }
    }

    Object.entries(weather).forEach(([key, value]) => {
      console.log(`${key}:`, value);
      // You can perform any operations on the key-value pairs here
    });

    return (
      <div className="WeatherPage-Container">
        <h3>Weather Information </h3>
        <ul>
          <li>Address: {weather.address}</li>
          <li>Timezone: {weather.timezone}</li>
          <li>latitude: {weather.latitude}</li>
          <li>longitude: {weather.longitude}</li>
          <li>resolvedAddress: {weather.resolvedAddress}</li>
          {flattenedRainChances.map((hour) => (
            <ul style={{ listStyleType: "none" }}>
              <li>{hour}</li>
            </ul>
          ))}
        </ul>
      </div>
    );
  }

  return state ? loggedIn(weather) : loggedOut();
};

export default WeatherPage;
