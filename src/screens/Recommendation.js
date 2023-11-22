import React from "react";

export default function Recommendation() {
  return (
    <div className="min-h-screen bg-purple-100 font-sans">
      <header class="bg-purple-500 text-white py-4 shadow-md">
        <h1 class="text-center text-2xl font-bold">
          <a href="../index.html" class="hover:text-gray-300">
            Daily Cocktaily
          </a>
        </h1>
      </header>

      <main class="container mx-auto p-4 mt-8">
        <section class="weather-display mb-6 bg-white p-6 rounded-md shadow-md">
          <div class="temp-display">
            <h2 class="text-xl font-bold mb-4">Current Weather Conditions!</h2>
            <p class="mb-4">
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
            <div class="flex justify-center mt-4" id="icon"></div>
          </div>
          <div class="forecast"></div>
        </section>

        <a
          href="../pages/recipe.html"
          class="block bg-white p-6 rounded-md shadow-md hover:bg-gray-100 transition"
        >
          <section class="flex flex-col items-center">
            <h3 class="text-xl font-bold mb-4" id="cocktail-name">
              Cocktail Name Title
            </h3>
            <p class="mb-4">(click anywhere here!)</p>
            <img
              id="cocktail-image"
              src="../assets/images/sample-cocktail.jpg"
              alt="Cocktail Photo"
              class="w-full rounded-md"
            />
          </section>
        </a>
      </main>
    </div>
  );
}
