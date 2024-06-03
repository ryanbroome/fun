import React from "react";
import weather from "./WeatherExample";

const WeatherDetail = () => {
  return (
    <div>
      <p>Address: {weather.resolvedAddress}</p>
    </div>
  );
};
export default WeatherDetail;
