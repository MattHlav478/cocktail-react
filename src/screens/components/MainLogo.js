import React, { useState } from "react";
import { citySearch } from "../../services/citySearch";
import { getLatLon } from "../../services/weatherSearch";

export default function CitySearch({ setModalState }) {
  return (
    <div className="btn flex flex-col justify-center items-center">
        <div className="logo" style={{ width: 300, height: 300, position: "relative" }}>
          <div
            style={{
              width: 300,
              height: 300,
              left: 0,
              top: 0,
              position: "",
              background: "#28F048",
              borderRadius: 50,
            }}
          />
          <div
            style={{
              width: 275,
              height: 275,
              left: 13,
              top: 13,
              position: "absolute",
              background: "white",
              borderRadius: 35,
            }}
          ></div>
      </div>
      <div className="text-center text-white text-xl">
        Welcome to Daily Cocktaily, an web app that pairs your local weather
        with a cocktail!
      </div>
      <div className="flex flex-row justify-center">
        <button
          className="bg-purple-100 p-4 w-1/2 rounded-xl border-2 border-black"
          onClick={() => setModalState("citySearch")}
        >
          Start
        </button>
      </div>
    </div>
  );
}
