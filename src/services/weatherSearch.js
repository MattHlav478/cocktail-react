// searce h will run this function first to grab the locations lat and lon
export const getLatLon = async (city, state, country) => {
  city = encodeURIComponent(city);
  state = encodeURIComponent(state);
  country = encodeURIComponent(country);

  let weatherResponse;

  var geocodeApi = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&appid=${process.env.REACT_APP_OPENWEATHER_API}`;
  try {
    const response = await fetch(geocodeApi);
    if (!response.ok) {
      console.log(await response.json());
      alert("Failed to fetch weather for this location");
    }
    const data = await response.json();
    let locationName = data[0].name;
    let locationState = data[0].state;
    let locationCountry = data[0].country;
    let locationLat = data[0].lat;
    let locationLon = data[0].lon;
  
    // after getting the lat and lon this function runs a fetch request to get the actual weather
    weatherResponse = await getWeather(
      locationName,
      locationState,
      locationCountry,
      locationLat,
      locationLon
    );
  } catch (error) {
    console.log(error);
  }
    return weatherResponse;
};

export function getWeather(
  locationName,
  locationState,
  locationCountry,
  locationLat,
  locationLon
) {
  let weatherApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${locationLat}&lon=${locationLon}&exclude={part}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=imperial`;
  let currentWeatherInfo;
  console.log(weatherApiUrl)
  return fetch(weatherApiUrl)
    .then(function (response) {
      if (!response.ok) {
        console.log(response.json());
        alert("failed to fetch weather data");
      }

      return response.json();
    })
    .then(function (data) {
      let currentTemp = Math.round(data.current.temp);
      let currentWeather = data.current.weather[0].description;
      let weatherIcon = data.current.weather[0].icon;

      currentWeatherInfo = [currentTemp, currentWeather, weatherIcon];
      return currentWeatherInfo;
    })
    .catch(function (error) {
      console.log(error);
    });

}
