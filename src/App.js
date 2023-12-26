import React, { useEffect, useState } from "react";
import "./App.css";
import { Home, Recipe, Recommendation } from "./screens";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./screens/components/Header";

function App() {
  const [citySelected, setCitySelected] = useState(false);
  const [weather, setWeather] = useState("");
  const [cocktail, setCocktail] = useState({
    cocktailName: "Default Cocktail",
    recipeIngredients: [
      "ingredient 1",
      "ingredient 2",
      "ingredient 3",
      "ingredient 4",
    ],
    recipeInstructions:
      "Here are some default instructions.",
    minTemp: "75°F",
    maxTemp: "100°F",
    image: "default.png",
  });

  useEffect(() => {
    console.log(cocktail.cocktailName);
  }, [cocktail]);

  return (
    <>
      <Header />
      <Home
        citySelected={citySelected}
        setCitySelected={setCitySelected}
        weather={weather}
        setWeather={setWeather}
        cocktail={cocktail}
        setCocktail={setCocktail}
      />
    </>
  );
}

export default App;
