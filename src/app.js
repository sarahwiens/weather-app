let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here

let city = prompt("Enter a City?");
city = city.trim().toLowerCase();

if (weather[city] !== undefined) {
  let farenheit = (weather[city].temp * 9) / 5 + 32;
  farenheit = Math.round(farenheit);
  weather[city].temp = Math.round(weather[city].temp);
  alert(
    `It is currently ${weather[city].temp}°C (${farenheit}°F) in ${city} with a humidity of ${weather[city].humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
