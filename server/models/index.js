var db = require('../db');
module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM `MESSAGES`', (error, results, fields) => {
        if (error) {
          return (error);
        }
        callback(results);
      });
    },
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM `USERS`', (error, results, fields) => {
        if (error) {
          return (error);
        }
        callback(results);
      });
    },
    post: function (params, callback) {
      console.log(params)
      db.query('INSERT INTO `USERS` (NAME) VALUES (?)', params, (error, results, fields) => {
        if (error) {
          callback(error, null);
        }
          callback(null, results);
      });
    }
  }
};

