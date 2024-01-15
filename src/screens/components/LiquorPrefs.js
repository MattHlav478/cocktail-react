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
    <div className="btn w-3/4 h-50 flex flex-col justify-center self-center mt-24 p-2 bg-white shadow-xl rounded-xl">
      <h2 className="text-lg font-bold mb-4 text-center">
        Liquor Preferences?
      </h2>

      <div className="modal-body grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center">
          <ToggleSwitch id={"gin"} onToggle={() => handleToggle("gin")} />
          <label htmlFor="gin" className="text-md pl-4">
            Gin
          </label>
        </div>
        <div className="flex items-center">
          <ToggleSwitch id={"rum"} onToggle={() => handleToggle("rum")} />
          <label htmlFor="rum" className="text-md pl-4">
            Rum
          </label>
        </div>
        <div className="flex items-center">
          <ToggleSwitch
            id={"tequila"}
            onToggle={() => handleToggle("tequila")}
          />
          <label htmlFor="tequila" className="text-md pl-4">
            Tequila
          </label>
        </div>
        <div className="flex items-center">
          <ToggleSwitch id={"mezcal"} onToggle={() => handleToggle("mezcal")} />
          <label htmlFor="mezcal" className="text-md pl-4">
            Mezcal
          </label>
        </div>
        <div className="flex items-center">
          <ToggleSwitch
            id={"whiskey"}
            onToggle={() => handleToggle("whiskey")}
          />
          <label htmlFor="whiskey" className="text-md pl-4">
            American Whiskey
          </label>
        </div>
        <div className="flex items-center">
          <ToggleSwitch id={"scotch"} onToggle={() => handleToggle("scotch")} />
          <label htmlFor="scotch" className="text-md pl-4">
            Scotch Whisky
          </label>
        </div>
        <div className="flex items-center">
          <ToggleSwitch id={"vodka"} onToggle={() => handleToggle("vodka")} />
          <label htmlFor="vodka" className="text-md pl-4">
            Vodka
          </label>
        </div>
        <div className="flex flex-row justify-center">
          <button
            className="bg-purple-100 p-4 w-1/2 rounded-xl border-2 border-black"
            onClick={() => handleLiquorPrefs()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
