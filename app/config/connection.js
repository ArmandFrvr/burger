// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var mysql = require("mysql2");

// Creates mySQL connection using Sequelize
var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "burger_db"
  })
}

connection.connect(function(err) {
  if(err) {
    return console.error("error connecting: " + err.stack);
  }
  console.log("Connected as id " + connection.threadId);
});

// Exports the connection for other files to use
module.exports = connection;
