import React, { useEffect, useState } from "react";
import ToggleSwitch from "./subcomponents/ToggleSwitch";
import { drinkFinder } from "../../services/localCocktailSearch";

export default function LiquorPrefs({
  setModalState,
  cocktail,
  setCocktail,
  weather,
}) {
  const [liquorPrefs, setLiquorPrefs] = useState([]);

  const handleToggle = (liquor) => {
    setLiquorPrefs((prevPrefs) => {
      if (prevPrefs.includes(liquor)) {
        return prevPrefs.filter((pref) => pref !== liquor);
      } else {
        return [...prevPrefs, liquor];
      }
    });
  };

  async function handleLiquorPrefs() {
    let cocktailData = await drinkFinder(liquorPrefs, weather);
    console.log(cocktailData);
    if (cocktailData === undefined) {
      setCocktail(null);
    } else {
      setCocktail(cocktailData);
    }
    setModalState("recommendation");
  }

  return (
    <div className="btn card-shadow max-w-sm w-3/4 flex flex-col justify-center self-center mt-24 p-2 text-white border-solid border-4 border-white shadow-xl rounded-xl">
      {/* <div className="btn card-shadow w-3/4 h-50 flex flex-col justify-center self-center mt-24 p-2 bg-white shadow-xl rounded-xl"> */}
      <h2 className="text-lg font-bold mb-4 text-center">
        Liquor Preferences?
      </h2>

      <div className="flex flex-col justify-center self-center sm:w-1/2">
        <div className="flex items-center mb-4">
          <ToggleSwitch id={"gin"} onToggle={() => handleToggle("gin")} />
          <label htmlFor="gin" className="text-md pl-4">
            Gin
          </label>
        </div>
        <div className="flex items-center mb-4">
          <ToggleSwitch id={"rum"} onToggle={() => handleToggle("rum")} />
          <label htmlFor="rum" className="text-md pl-4">
            Rum
          </label>
        </div>
        <div className="flex items-center mb-4">
          <ToggleSwitch
            id={"tequila"}
            onToggle={() => handleToggle("tequila")}
          />
          <label htmlFor="tequila" className="text-md pl-4">
            Tequila
          </label>
        </div>
        <div className="flex items-center mb-4">
          <ToggleSwitch id={"mezcal"} onToggle={() => handleToggle("mezcal")} />
          <label htmlFor="mezcal" className="text-md pl-4">
            Mezcal
          </label>
        </div>
        <div className="flex items-center mb-4">
          <ToggleSwitch
            id={"whiskey"}
            onToggle={() => handleToggle("whiskey")}
          />
          <label htmlFor="whiskey" className="text-md pl-4">
            American Whiskey
          </label>
        </div>
        <div className="flex items-center mb-4">
          <ToggleSwitch id={"scotch"} onToggle={() => handleToggle("scotch")} />
          <label htmlFor="scotch" className="text-md pl-4">
            Scotch Whisky
          </label>
        </div>
        <div className="flex items-center mb-4">
          <ToggleSwitch id={"vodka"} onToggle={() => handleToggle("vodka")} />
          <label htmlFor="vodka" className="text-md pl-4">
            Vodka
          </label>
        </div>
        <div className="flex flex-row justify-center">
          <button
          className="p-2 w-24 text-center rounded-xl border-2 border-roller-3"
            onClick={() => handleLiquorPrefs()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
