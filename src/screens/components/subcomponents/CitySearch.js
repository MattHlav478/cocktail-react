import React, { useState } from "react";
import { citySearch } from "../../../services/citySearch";

export default function CitySearch({ setState }) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [searchSelect, setSearchSelect] = useState(false);

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

  const handleSearchSelection = (city, state) => {
    console.log(city, state);
    setQuery(`${city}, ${state}`);
    setSearchSelect(true);
  };
  return (
    <div className="btn w-3/4 h-50 flex flex-col justify-center self-center mt-24 p-2 bg-white shadow-xl rounded-xl ">
      <h1 className="text-xl text-center mb-2 font-semibold">
        Where are we mixing things up?
      </h1>
      <div className="text-center">
        <span className=" flex flex-row justify-between border-2 p-2 mb-4 rounded-md w-full md:w-2/3 lg:w-1/2 mx-auto shadow-sm">
          <input
            type="text"
            placeholder="City, State"
            id="search-city"
            value={query}
            className="focus:outline-none"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button
            className="flex items-center justify-center w-7 h-7 text-center border-2"
            onClick={() => {
              setQuery("");
              setSearchSelect(false);
            }}
          >
            x
          </button>
        </span>
        {searchResults && !searchSelect && query.length > 0 && (
          <ul className="absolute flex flex-col bg-white border-2 border-solid">
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
              .map((result, index) => (
                <li
                  className="text-left py-1 hover:bg-sky-200"
                  onClick={() =>
                    handleSearchSelection(result.city, result.state)
                  }
                >
                  <div>
                    {result.city}, {result.state}
                  </div>
                  <div>{result.country}</div>
                </li>
              ))}
          </ul>
        )}{" "}
      </div>
      <div className="flex flex-row justify-center">
        <button
          className="bg-purple-100 p-4 w-1/2 rounded-xl border-2 border-black"
          onClick={() => setState((state) => !state)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
