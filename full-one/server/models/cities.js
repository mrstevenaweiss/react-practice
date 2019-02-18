const db = require('../database');

class Cities {
  // get the list of cities from our DB
  static retrieveAll(callback) {
    db.query("SELECT city_name from CITIES", (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    })
  }

  static insert (city, callback) {
    db.query('INSERT INTO cities (city_name) VALUES ($1)', [city], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

}
// import to other files
module.exports = Cities;
