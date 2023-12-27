import data from "../assets/data/recipes.json";

//function to request list of drinks with the magicWord() in its ingredients
export async function drinkFinder(liquorPrefs, weather) {
  var getCocktailData = async function () {
    console.log(`choices: ${liquorPrefs}`);
    let choices = liquorPrefs ? liquorPrefs : [];
    let currentTemp = weather[0];

    return data.filter((cocktail) => {
      const isTempSuitable =
        currentTemp >= parseInt(cocktail.minTemp) &&
        currentTemp <= parseInt(cocktail.maxTemp);
      if (choices.length != 0) {
        const hasPreferredLiquor = choices.some((liquor) =>
          cocktail.recipeIngredients.some((ingredient) =>
            ingredient.toLowerCase().includes(liquor.toLowerCase())
          )
        );
        return isTempSuitable && hasPreferredLiquor;
      } else {
        return isTempSuitable;
      }
    });
  };

  //function to get one random drink from the cocktail array
  async function getIndex(cocktailArray) {
    let cocktailChoice =
      cocktailArray[Math.floor(Math.random() * cocktailArray.length)];
    console.log(`cocktail choice: ${JSON.stringify(cocktailChoice)}`);
    return cocktailChoice;
  }
  const cocktailArray = await getCocktailData();
  console.log(cocktailArray);
  return getIndex(cocktailArray);
}
