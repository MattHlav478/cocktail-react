import React, { useState, useRef, useEffect } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./Home.css";
import LiquorPrefs from "./components/LiquorPrefs";
import CitySearch from "./components/CitySearch";

export default function Home({
  citySelected,
  setCitySelected,
  weather,
  setWeather,
  setCocktail,
}) {
  const [modalState, setModalState] = useState(true);
  const cityRef = useRef(null);
  const liquorRef = useRef(null);
  const nodeRef = modalState ? cityRef : liquorRef;

  // useEffect(() => {
  //   console.log(nodeRef.current);
  // }, [nodeRef]);

  // useEffect(() => {
  //   console.log(modalState);
  // }, [modalState]);

  return (
    <>
      <div className="min-h-screen bg-purple-100 font-sans">
        <div className="absolute w-full h-3/4 flex flex-col">
          <SwitchTransition mode={"out-in"}>
            <CSSTransition
              key={modalState} // Use the state to generate a unique key
              nodeRef={nodeRef}
              addEndListener={(done) => {
                nodeRef.current.addEventListener("transitionend", done, false);
              }}
              classNames="fade"
            >
              <div ref={nodeRef} className="flex justify-center">
                {modalState ? (
                  <CitySearch
                    citySelected={citySelected}
                    setCitySelected={setCitySelected}
                    setWeather={setWeather}
                    modalState={modalState}
                    setModalState={setModalState}
                  />
                ) : (
                  <LiquorPrefs
                    modalState={modalState}
                    setModalState={setModalState}
                    setCocktail={setCocktail}
                    weather={weather}
                  />
                )}
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </>
  );
}
