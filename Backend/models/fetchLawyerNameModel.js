
const db = require("../config/db");

exports.getUsersByRole = (callback) => {
  db.query("SELECT * FROM users WHERE role_id IN (7)", (error, results) => {
    if (error) {
      return callback(error, null); // Pass error to the callback
    }
    callback(null, results); // Pass data to the callback
  });
};