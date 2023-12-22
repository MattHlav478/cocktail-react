import React, { useEffect, useState } from "react";
import "./App.css";
import { Home, Recipe, Recommendation } from "./screens";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./screens/components/Header";

function App() {
  const [citySelected, setCitySelected] = useState(false);
  const [weather, setWeather] = useState("");
  const [cocktail, setCocktail] = useState({
    drinkName: "Default Drink Name",
    ingredients: ["ingredient_1","ingredient_2","ingredient_3", "ingredient_4"],
    recipe: "This is the default recipe",
    imageUrl: "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2020/04/29/867d59ba-89d1-11ea-8a72-3b4a65ec119d_image_hires_123712.jpg?itok=sJRdANpF&v=1588135040"
  });

    return (
    <>
      <Header />
      <div>
        {cocktail.drinkName}
      </div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                citySelected={citySelected}
                setCitySelected={setCitySelected}
                weather={weather}
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
