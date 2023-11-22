import React from "react";

export default function Recipe() {
  return (
    <div className="min-h-screen bg-purple-100 font-sans">
      <header class="bg-purple-500 text-white py-4 shadow-md">
        <h1 class="text-center text-2xl font-bold">
          <a href="../index.html" class="hover:text-gray-300">
            Daily Cocktaily
          </a>
        </h1>
      </header>

      <main class="container mx-auto p-4 mt-8">
        <section class="recipe-display mb-6 bg-white p-6 rounded-md shadow-md">
          <h3 id="cocktail-name" class="text-xl font-bold mb-4">
            Cocktail Name Title
          </h3>
          <img
            id="cocktail-image"
            src="../assets/images/sample-cocktail.jpg"
            alt="Cocktail Photo"
            class="w-full rounded-md"
          />
        </section>

        <section class="ingredients-display mb-6 bg-white p-6 rounded-md shadow-md">
          <h3 class="text-xl font-bold mb-4">What You'll Need</h3>
          <ul id="ingredients-list" class="list-disc pl-5"></ul>
        </section>

        <section class="directions-display bg-white p-6 rounded-md shadow-md">
          <h4 class="text-xl font-bold mb-4">All You Have to Do is ...</h4>
          <p id="instructions"></p>
        </section>
      </main>
    </div>
  );
}
