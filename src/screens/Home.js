import React, { useState, useRef, useEffect } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./Home.css";
import LiquorPrefs from "./components/LiquorPrefs";
import { citySearch } from "../services/citySearch";

export default function Home() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const [state, setState] = useState(true);
  const helloRef = useRef(null);
  const goodbyeRef = useRef(null);
  const nodeRef = state ? helloRef : goodbyeRef;

  useEffect(() => {
    console.log(nodeRef.current);
  }, [nodeRef]);

  useEffect(() => {
    console.log(state);
  }, [state]);

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
        console.log(searchResults);
      } catch (error) {
        console.log("Error fetching search results: ", error);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-purple-100 font-sans">
        <header className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-4 shadow-md">
          <h1 className="text-center text-2xl font-bold">Daily Cocktaily</h1>
        </header>

        <div className="absolute w-full h-3/4 flex flex-col">
          <SwitchTransition mode={"out-in"}>
            <CSSTransition
              key={state} // Use the state to generate a unique key
              nodeRef={nodeRef}
              addEndListener={(done) => {
                nodeRef.current.addEventListener("transitionend", done, false);
              }}
              classNames="fade"
            >
              <div ref={nodeRef} className="flex justify-center">
                {state ? (
                  <div className="btn w-3/4 h-50 flex flex-col justify-center self-center mt-24 p-2 bg-white shadow-xl rounded-xl ">
                    <h1 className="text-xl text-center mb-2 font-semibold">
                      Where are we mixing things up?
                    </h1>
                    <div className="text-center">
                      <input
                        type="text"
                        placeholder="City, State"
                        id="search-city"
                        className="border-2 p-2 mb-4 rounded-md w-full md:w-2/3 lg:w-1/2 mx-auto shadow-sm focus:outline-none focus:border-red-500"
                        value={query}
                        onChange={(e) => handleSearch(e.target.value)}
                      />
                      {searchResults && query.length > 0 && (
                        <ul>
                          {searchResults.map((result, index) => (
                            <li>
                              {result.city}, {result.state}, {result.country}
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
                ) : (
                  <LiquorPrefs state={state} setState={setState} />
                )}
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </>
  );
}
