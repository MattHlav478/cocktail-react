import React, { useEffect, useState } from "react";
import "./App.css";
import { Home, Recipe, Recommendation } from "./screens";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./screens/components/Header";

function App() {
  const [modalState, setModalState] = useState("citySearch");
  const [citySelected, setCitySelected] = useState(false);
  const [weather, setWeather] = useState("");
  const [cocktail, setCocktail] = useState(null);

  // useEffect(() => {
  //   if (cocktail === null) {
  //     console.log("cocktail is null");
  //   } else {
  //     console.log(cocktail.cocktailName);
  //   }
  // }, [cocktail]);

  return (
    <>
      <Header modalState={modalState} setModalState={setModalState} />
      <Home
        modalState={modalState}
        setModalState={setModalState}
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
