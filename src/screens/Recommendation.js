import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faCloudSun,
  faCloudMoon,
  faCloud,
  faCloudShowersHeavy,
  faCloudSunRain,
  faCloudMoonRain,
  faCloudBolt,
  faSnowflake,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

const useWeatherIcon = (weatherCode) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    switch (weatherCode) {
      case "02d":
        setIcon(faSun);
        break;
      case "02n":
        setIcon(faMoon);
        break;
      case "03d":
        setIcon(faCloudSun);
        break;
      case "03n":
        setIcon(faCloudMoon);
        break;
      case "04d":
      case "04n":
        setIcon(faCloud);
        break;
      case "09d":
      case "09n":
        setIcon(faCloudShowersHeavy);
        break;
      case "10d":
        setIcon(faCloudSunRain);
        break;
      case "10n":
        setIcon(faCloudMoonRain);
        break;
      case "11d":
      case "11n":
        setIcon(faCloudBolt);
        break;
      case "13d":
      case "13n":
        setIcon(faSnowflake);
        break;
      case "50d":
      case "50n":
        setIcon(faSmog);
        break;
      default:
        setIcon(null);
    }
  }, [weatherCode]);

  return icon;
};

export default function Recommendation({ weather, cocktail }) {
  useEffect(() => {
    console.log(`cocktail: ${cocktail.cocktailName}`);
  }, [cocktail]);

  const icon = useWeatherIcon(weather[2]);

  return (
    <div className="min-h-screen bg-purple-100 font-sans">
      <main className="container mx-auto p-4">
        <section className="weather-display mb-6 bg-white p-6 rounded-md shadow-md">
          <div className="temp-display">
            <h2 className="text-xl font-bold mb-4">
              Current Weather Conditions!
            </h2>
            <p className="mb-4">
              After searching hundreds of different cocktails, we have made the
              following recommendation based on the current weather in your
              area!
            </p>
            <p>
              Current temp: <span id="temp">{weather[0]}</span>
              &deg;F /{" "}
              <span id="temp">{Math.round((weather[0] - 32) * (5 / 9))}</span>
              &deg;C
            </p>
            <p>
              Conditions:{" "}
              <span id="conditions">
                {weather[1][0].toUpperCase() + weather[1].slice(1)}
              </span>
            </p>
            <FontAwesomeIcon icon={icon} size="5x" color="purple" />
          </div>
          <div className="forecast"></div>
        </section>

        <section className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4" id="cocktail-name">
            {cocktail.cocktailName}
          </h3>
          <p className="mb-4">(click anywhere here!)</p>
          <img
            id="cocktail-image"
            src={require(`../assets/images/${cocktail.image}`)}
            alt="Cocktail Photo"
            className="w-full rounded-md"
          />
        </section>
      </main>
    </div>
  );
}
