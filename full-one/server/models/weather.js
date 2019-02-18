const request = require('request-promise');

const API_KEY = '7ab11b1f26bab01a5713864a538c9531'

class Weather {
  static retrieveByCity (city, callback) {
    request({
      uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
      json: true
    }).then((res) => {
      callback(res);
    }).catch((err) => {
      console.log(err);
      callback({ error: 'Could not reach OpenWeatherMap API.' });
    });
  }
}
// import to other files
module.exports = Weather;
