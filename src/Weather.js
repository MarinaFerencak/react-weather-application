import React from "react";
import "./Weather.css";
import sun from "./sun.png";
import clouds from "./clouds.png";
import sunwithclouds from "./sunwithclouds.png";

export default function Weather() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h1>Lisbon</h1>
          <p>Tuesday 14:25</p>
          <p className="weather-description">Sun</p>
        </div>
        <div className="row">
          <div className="col">
            <img src={sun} alt="sun icon" className="main-icon" />
            <div className="current-temperature">25</div>
            <div className="measure-unit">°C</div>
          </div>
          <div className="col mt-4">
            <ul>
              <li>Humidity: 26%</li>
              <li>Wind: 13km/h</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row ms-1 mt-3">
        <div className="col forecast-days">Wed</div>
        <div className="col forecast-days">Thu</div>
        <div className="col forecast-days">Fri</div>
        <div className="col forecast-days">Sat</div>
        <div className="col forecast-days">Sun</div>
      </div>
      <div className="row">
        <div className="col">
          <img src={clouds} alt="clouds icon" className="forecast-icons" />
        </div>
        <div className="col">
          <img
            src={sunwithclouds}
            alt="sun with clouds icon"
            className="forecast-icons"
          />
        </div>
        <div className="col">
          <img
            src={sunwithclouds}
            alt="sun with clouds icon"
            className="forecast-icons"
          />
        </div>
        <div className="col">
          <img src={clouds} alt="clouds icon" className="forecast-icons" />
        </div>
        <div className="col">
          <img src={clouds} alt="clouds icon" className="forecast-icons" />
        </div>
      </div>
      <div className="row">
        <div className="col forecast-temperatures">
          <strong>35°</strong> 24°
        </div>
        <div className="col forecast-temperatures">
          <strong>30°</strong> 23°
        </div>
        <div className="col forecast-temperatures">
          <strong>30°</strong> 21°
        </div>
        <div className="col forecast-temperatures">
          <strong>32°</strong> 20°
        </div>
        <div className="col forecast-temperatures">
          <strong>29°</strong> 20°
        </div>
      </div>
    </div>
  );
}
