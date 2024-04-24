import React, { useState, useEffect } from "react";
import { citySearch } from "../../services/citySearch";
import { getLatLon } from "../../services/weatherSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function CitySearch({
  query,
  setQuery,
  citySelected,
  setCitySelected,
  setWeather,
  setModalState,
  setCocktail,
}) {
  const [searchResults, setSearchResults] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    setQuery("");
    setCitySelected(false);
    setWeather("");
    setCocktail(null);
  }, []);

  const handleSearch = async (query) => {
    setQuery(query);

    if (query.length > 2) {
      try {
        const cities = await citySearch(query);

        if (Array.isArray(cities)) {
          setSearchResults([...cities]);
        } else {
          console.log("Error: API call returned non-array data.");
        }
      } catch (error) {
        console.log("Error fetching search results: ", error);
      }
    }
  };

  const handleSwitchModal = () => {
    if (citySelected) {
      setModalState("liquorPrefs");
    } else if (!citySelected) {
      setErrorMessage(true);
    } else {
      console.log("Error: citySelected is not a boolean.");
    }
  };

  const handleCitySelection = async (city, state, country) => {
    console.log(city, state);
    setQuery(`${city}, ${state}`, `${country}`);
    setCitySelected(true);
    const weatherData = await getLatLon(city, state, country);
    setWeather(weatherData);
  };

  return (
    <div className="btn card-shadow max-w-sm w-3/4 flex flex-col justify-center self-center mt-24 p-2 text-white border-solid border-4 border-white shadow-xl rounded-xl">
      {/* <div className="btn card-shadow w-3/4 flex flex-col justify-center self-center mt-24 p-2 bg-white shadow-xl rounded-xl"> */}
      <h1 className="mb-2 text-center text-xl font-semibold">
        Where are we mixing things up?
      </h1>
      <div className="text-center px-2">
        <div className="flex justify-between border-2 py-2 px-2 mb-4 rounded-lg">
          <input
            type="text"
            placeholder="City, State"
            id="search-city"
            value={query}
            className="bg-transparent w-100 focus:outline-none mr-2"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button
            className="flex items-center justify-center text-center"
            onClick={() => {
              setQuery("");
              setCitySelected(false);
              setErrorMessage(false);
            }}
          >
            <FontAwesomeIcon
              icon={faXmark}
              size="2x"
              className="text-roller-4"
            />
          </button>
        </div>
        {searchResults && !citySelected && query.length > 0 && (
          <ul className="absolute flex flex-col bg-white text-black border-2 border-solid rounded-lg">
            {searchResults
              .reduce((unique, result) => {
                if (
                  unique.findIndex(
                    (item) =>
                      item.city === result.city &&
                      item.state === result.state &&
                      item.country === result.country
                  ) === -1
                ) {
                  unique.push(result);
                }
                return unique;
              }, [])
              .map((result, i) => (
                <li
                  key={i}
                  className="text-left py-1 hover:bg-sky-200 border"
                  onClick={() =>
                    handleCitySelection(
                      result.city,
                      result.state,
                      result.country
                    )
                  }
                >
                  <div>
                    {result.city}, {result.state}
                  </div>
                  <div className="text-gray-400">{result.country}</div>
                </li>
              ))}
          </ul>
        )}
        {
          <div className="h-10 text-red-600">
            {errorMessage && !citySelected ? "Please select a valid city." : ""}
          </div>
        }{" "}
      </div>
      <div className="flex flex-row justify-center">
        <button
          className="p-2 w-24 text-center rounded-xl border-2 border-roller-3"
          onClick={() => handleSwitchModal()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
