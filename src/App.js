import React, { useEffect, useState } from "react";
import "./App.css";
import { Home, Recipe, Recommendation } from "./screens";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./screens/components/Header";

function App() {
  const [citySelected, setCitySelected] = useState(false);
  const [weather, setWeather] = useState("");
  const [cocktail, setCocktail] = useState("");

  useEffect(() => console.log(weather), [weather]);

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                citySelected={citySelected}
                setCitySelected={setCitySelected}
                setWeather={setWeather}
                setCocktail={setCocktail}
              />
            }
          />
          <Route
            path="/recommendation"
            element={<Recommendation weather={weather} cocktail={cocktail} />}
          />
          <Route path="/recipe" element={<Recipe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
