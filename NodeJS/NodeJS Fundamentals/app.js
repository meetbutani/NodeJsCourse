var request = require("request");
var weather = require("openweather-apis");
// weather.setLang('it');
// weather.setCity('Fairplay');
// let ownKey = http://openweathermap.org/58469e843e27429d1b6037e1ec344f0f
// weather.setAPPID(ownKey);
let url =
  "https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=5bdd9a6382dcff5d3397132ebead1894";
let weatherUrlForLatLong =
  "https://api.openweathermap.org/data/2.5/weather?lat=23.033863&lon=72.585022&appid=5bdd9a6382dcff5d3397132ebead1894";
request({ uri: weatherUrlForLatLong, json: true }, (error, { body }) => {
  if (error) {
    console.log(error);
  } else if (body.error) {
    console.log(body.error);
  } else {
    console.log(body);
  }
});
