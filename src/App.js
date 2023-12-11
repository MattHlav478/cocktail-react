import React, { useEffect, useState } from "react";
import "./App.css";
import { Home, Recipe, Recommendation } from "./screens";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [citySelected, setCitySelected] = useState(false);
  const [weather, setWeather] = useState("");

  useEffect(() => console.log(weather), [weather]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                citySelected={citySelected}
                setCitySelected={setCitySelected}
                setWeather={setWeather}
              />
            }
          />
          <Route
            path="/recommendation"
            element={<Recommendation weather={weather} />}
          />
          <Route path="/recipe" element={<Recipe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
