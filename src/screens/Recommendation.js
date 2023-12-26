import React, { useEffect, useState } from "react";
import scattered from "../assets/icons/scattered_clouds_01.png";

export default function Recommendation({ weather, cocktail }) {
  useEffect(() => {
    console.log(`cocktail: ${cocktail.cocktailName}`);
  }, [cocktail]);

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
            <img src={scattered} />
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