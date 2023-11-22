import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-100 font-sans">
      <header className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-4 shadow-md">
        <h1 className="text-center text-2xl font-bold">Daily Cocktaily</h1>
      </header>

      <main className="container mx-auto p-4 mt-8">
        <h1 className="text-xl text-center mb-6 font-semibold">
          Where are we mixing things up?
        </h1>

        <div className="text-center">
          <input
            type="text"
            placeholder="City, State"
            id="search-city"
            className="border-2 p-2 rounded-md w-full md:w-2/3 lg:w-1/2 mx-auto shadow-sm focus:outline-none focus:border-red-500"
          />
        </div>

        <div id="" className="mt-6">
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
          </div>

          <div className="mt-6 text-center">
            <div className="relative">
              <button className="absolute inset-0 bg-purple-600 opacity-0 hover:opacity-100 text-white font-bold py-2 px-6 rounded-md">
                Search
              </button>
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-md py-2 px-6">
                <button className="search-btn text-white font-bold py-2 px-6 rounded-md">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
