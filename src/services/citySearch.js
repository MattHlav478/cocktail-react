export const citySearch = async (query) => {
  try {
    const response = await fetch(
      `http://api.geonames.org/searchJSON?q=${query}&maxRows=10&username=matthewh478`
    );
    const data = await response.json();
    console.log(data);
    const cities = await data.geonames.map((city) => ({
      city: city.name,
      state: city.adminName1,
      country: city.countryName,
    }));
    return cities;
  } catch (error) {
    console.group("Error fetching city data: ", error);
    return [];
  }
};
