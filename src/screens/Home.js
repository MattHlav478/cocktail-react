import React, { useState, useRef, useEffect } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./Home.css";

export default function Home() {
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
                  <div className="btn w-3/4 h-50 flex flex-col justify-center self-center mt-24 p-2 rounded-xl border-2 border-solid border-black">
                    <h1 className="text-xl text-center mb-2 font-semibold">
                      Where are we mixing things up?
                    </h1>
                    <div className="text-center">
                      <input
                        type="text"
                        placeholder="City, State"
                        id="search-city"
                        className="border-2 p-2 mb-4 rounded-md w-full md:w-2/3 lg:w-1/2 mx-auto shadow-sm focus:outline-none focus:border-red-500"
                      />
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
                  <div className="btn w-3/4 h-50 flex flex-col justify-center self-center mt-24 p-2 rounded-xl border-2 border-solid border-black">
                    <h2 className="text-lg font-bold mb-4 text-center">
                      Liquor Preferences?
                    </h2>

                    <div className="modal-body grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <input type="checkbox" id="gin" className="mr-2" />
                        <label htmlFor="gin" className="text-md">
                          Gin
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="rum" className="mr-2" />
                        <label htmlFor="rum" className="text-md">
                          Rum
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="tequila" className="mr-2" />
                        <label htmlFor="tequila" className="text-md">
                          Tequila
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="mezcal" className="mr-2" />
                        <label htmlFor="mezcal" className="text-md">
                          Mezcal
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="whiskey" className="mr-2" />
                        <label htmlFor="whiskey" className="text-md">
                          American Whiskey
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="whisky" className="mr-2" />
                        <label htmlFor="whisky" className="text-md">
                          Scotch Whisky
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="vodka" className="mr-2" />
                        <label htmlFor="vodka" className="text-md">
                          Vodka
                        </label>
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
                  </div>
                )}
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </>
  );
}
