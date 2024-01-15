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

export default function Recommendation({
  query,
  weather,
  cocktail,
  setModalState,
}) {
  useEffect(() => {
    console.log(`cocktail: ${cocktail.cocktailName}`);
  }, [cocktail]);

  const icon = useWeatherIcon(weather[2]);

  return (
    <div className="btn w-5/6 h-50 flex flex-col justify-center self-center p-2">
      <section className="flex flex-col items-center bg-white mb-4 p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-2">Current Weather For:</h2>
        <h2 className="text-xl font-bold">{query}</h2>
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
        <FontAwesomeIcon icon={icon} size="5x" className="text-roller-4" />
      </section>

      <section className="flex w-full justify-center items-center mb-4 rounded-md shadow-md">
        <div className="bars flex-1 h-12">
          <div className="h-1/5 mb-2 bg-roller-1 rounded-md"></div>
          <div className="h-1/5 mb-2 bg-roller-2 rounded-md"></div>
          <div className="h-1/5 mb-2 bg-roller-3 rounded-md"></div>
        </div>
        <h3
          className="flex items-center justify-center grow h-12 text-2xl text-center text-white font-bold"
          id="cocktail-name"
        >
          {cocktail.cocktailName}
        </h3>
        <div className="bars flex-1 h-12">
          <div className="h-1/5 mb-2 bg-roller-1 rounded-md"></div>
          <div className="h-1/5 mb-2 bg-roller-2 rounded-md"></div>
          <div className="h-1/5 mb-2 bg-roller-3 rounded-md"></div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-white mb-4 p-6 rounded-md shadow-md">
        <img
          id="cocktail-image"
          src={require(`../assets/images/${cocktail.image}`)}
          alt="Cocktail Photo"
          className="w-full rounded-md"
        />
      </section>
      <section className="flex flex-col items-center bg-white mb-4 p-6 rounded-md shadow-md">
        <div className="text-xl font-bold mb-4">What You'll Need:</div>
        <ul className="bullets">
          {cocktail.recipeIngredients.map((item, key) => (
            <li>{item}</li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col bg-white mb-4 p-6 rounded-md shadow-md">
        <div className="text-center text-xl font-bold mb-4">
          What You'll Do:
        </div>
        <div>{cocktail.recipeInstructions}</div>
      </section>
      <div className="flex flex-row justify-center">
        <button
          className="bg-purple-100 p-4 w-1/2 rounded-xl border-2 border-black"
          onClick={() => setModalState("citySearch")}
        >
          Another?
        </button>
      </div>
    </div>
  );
}
