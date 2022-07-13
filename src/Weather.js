import React from "react";
import "./Weather.css";
import clearsky from "./clearsky.png";

export default function Weather() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h1>Lisbon</h1>
          <p>Tuesday 14:25</p>
          <p>Clear sky</p>
        </div>
        <div className="row pt-2">
          <div className="col">
            <img src={clearsky} alt="clear sky" />
            <div className="current-temperature">25</div>
            <div className="measure-unit">°C</div>
          </div>
        </div>
      </div>
    </div>
  );
}
