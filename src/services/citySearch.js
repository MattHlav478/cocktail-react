export const citySearch = async (query) => {
  try {
    const response = await fetch(
      `https://api.maptiler.com/geocoding/${query}.json?language=en&types=municipality%2Cmunicipal_district%2Clocality&autocomplete=false&fuzzyMatch=true&limit=10&key=${process.env.REACT_APP_MAPTILER_API}`
    );
    const data = await response.json();
    console.log(data);
    const cities = await data.features
      .map((city) => {
        let inputString = city.place_name_en
        function splitString(inputString) {
          let parts = inputString.split(",").map(function (part) {
            return part.trim();
          });
          return parts;
        }
        let parts = splitString(inputString)
        return {
          city: parts[0],
          state: parts[1],
          country: parts[2],
          // population: city.annotations.population,
        };
      })
      // .filter((city) => city && city.city)
      // .filter((city) => !(city && (city.city.match(/-/g) || []).length >= 2))
      // .filter(
      //   (state) => !(state && (state.state.match(/-/g) || []).length >= 2)
      // );
    // .sort((a, b) => b.population - a.population);
    return cities;
  } catch (error) {
    console.group("Error fetching city data: ", error);
    return [];
  }
};

// export const citySearch = async (query) => {
//   try {
//     const response = await fetch(
//       `http://api.geonames.org/searchJSON?q=${query}&maxRows=10&username=matthewh478`
//     );
//     const data = await response.json();
//     console.log(data);
//     const cities = await data.geonames
//       .map((city) => {
//         if ((city.fc1Name = "city, village,...")) {
//           return {
//             city: city.name,
//             state: city.adminName1,
//             country: city.countryName,
//             population: city.population,
//           };
//         } else return null;
//       })
//       .filter((city) => !(city && (city.city.match(/-/g) || []).length >= 2))
//       .filter(
//         (state) => !(state && (state.state.match(/-/g) || []).length >= 2)
//       )
//       .sort((a, b) => b.population - a.population);
//     return cities;
//   } catch (error) {
//     console.group("Error fetching city data: ", error);
//     return [];
//   }
// };
