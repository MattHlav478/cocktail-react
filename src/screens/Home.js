import React, { useState, useRef, useEffect } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./Home.css";
import LiquorPrefs from "./components/LiquorPrefs";
import CitySearch from "./components/subcomponents/CitySearch";

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
                  <CitySearch setState={setState} />
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
