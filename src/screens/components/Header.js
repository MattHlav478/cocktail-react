import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function Header({ modalState, setModalState }) {
  const handleBackNav = () => {
    console.log("hello");
    if (modalState == "recommendation") {
      setModalState("liquorPrefs");
    } else if (modalState == "liquorPrefs") {
      setModalState("citySearch");
    }
  };

  return (
    <header className="h-16 flex flex-row items-center justify-center text-white">
      {modalState == "citySearch" || modalState == "recommendations" ? null : (
        <button onClick={handleBackNav}>
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            size="2x"
            className="absolute left-0 top-2 ml-2 text-white"
          />
        </button>
      )}

      <h1 className="title font-acidbath text-center text-4xl sm:text-6xl">
        Cocktaily Daily
      </h1>
    </header>
  );
}
