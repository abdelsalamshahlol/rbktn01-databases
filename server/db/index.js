var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

let dbConnection = mysql.createConnection({
  user: 'root',
  password: 'toor',
  database: 'chat'
});

dbConnection.connect();

module.exports = dbConnection;