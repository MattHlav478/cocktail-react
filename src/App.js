import React, { useState } from "react";
import "./App.css";
import { Home } from "./screens";
import Header from "./screens/components/Header";

function App() {
  const [modalState, setModalState] = useState("citySearch");
  const [citySelected, setCitySelected] = useState(false);
  const [weather, setWeather] = useState("");
  const [cocktail, setCocktail] = useState(null);

  return (
    <div className="bg-slate-800">
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
    </div>
  );
}

export default App;
