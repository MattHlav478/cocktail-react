export const citySearch = async (query) => {
  try {
    const response = await fetch(
      `http://api.geonames.org/searchJSON?q=${query}&maxRows=10&username=matthewh478`
    );
    // const data = await response.json();
    const cities = await response.geonames.map((city) => ({ label: city.name }));
    return cities;
  } catch (error) {
    console.group("Error fetching city data");
    return [];
  }
};

