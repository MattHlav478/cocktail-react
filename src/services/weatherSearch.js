// searce h will run this function first to grab the locations lat and lon
export const getLatLon = async ({ city, state, country }) => {
  var geocodeApi = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&appid=${process.env.REACT_APP_OPENWEATHER_API}`;

  fetch(geocodeApi)
    .then(function (response) {
      if (!response.ok) {
        console.log(response.json());
        alert("Failed to fetch weather for this location");
      }

      return response.json();
    })
    .then(function (data) {
      let locationName = data[0].name;
      let locationState = data[0].state;
      let locationCountry = data[0].country;
      let locationLat = data[0].lat;
      let locationLon = data[0].lon;

      // after getting the lat and lon this function runs a fetch request to get the actual weather
      getWeather(
        locationName,
        locationState,
        locationCountry,
        locationLat,
        locationLon
      );
    });
};

export function getWeather(
  locationName,
  locationState,
  locationCountry,
  locationLat,
  locationLon
) {
  var weatherApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${locationLat}&lon=${locationLon}&exclude={part}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=imperial`;
  fetch(weatherApiUrl)
    .then(function (response) {
      if (!response.ok) {
        console.log(response.json());
        alert("failed to fetch weather data");
      }

      return response.json();
    })
    .then(function (data) {
      console.log(data.current.temp);
      console.log(data.current.weather[0].description);
      console.log(data.current.weather[0].icon);

      let currentTemp = data.current.temp;
      let currentWeather = data.current.weather[0].description;
      let weatherIcon = data.current.weather[0].icon;

      let weatherInfo = [currentTemp, currentWeather, weatherIcon];
      console.log(`weatherInfo: ${weatherInfo}`)
      return weatherInfo;
    })
    .catch(function (error) {
      console.log(error);
    });
}