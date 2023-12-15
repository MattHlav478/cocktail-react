import React from "react";

export default function Recommendation() {
  return (
    <div className="min-h-screen bg-purple-100 font-sans">
      <main className="container mx-auto p-4">
        <section className="weather-display mb-6 bg-white p-6 rounded-md shadow-md">
          <div className="temp-display">
            <h2 className="text-xl font-bold mb-4">Current Weather Conditions!</h2>
            <p className="mb-4">
              After searching hundreds of different cocktails, we have made the
              following recommendation based on the current weather in your
              area!
            </p>
            <p>
              Current temp: <span id="temp"></span>&deg;
            </p>
            <p>
              Conditions: <span id="conditions"></span>
            </p>
            <div className="flex justify-center mt-4" id="icon"></div>
          </div>
          <div className="forecast"></div>
        </section>

        <a
          href="../pages/recipe.html"
          className="block bg-white p-6 rounded-md shadow-md hover:bg-gray-100 transition"
        >
          <section className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4" id="cocktail-name">
              Cocktail Name Title
            </h3>
            <p className="mb-4">(click anywhere here!)</p>
            <img
              id="cocktail-image"
              src="../assets/images/sample-cocktail.jpg"
              alt="Cocktail Photo"
              className="w-full rounded-md"
            />
          </section>
        </a>
      </main>
    </div>
  );
}
