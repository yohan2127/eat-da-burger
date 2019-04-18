// Set up MySQL connection.
var mysql = require("mysql");
var connection;
//make connection
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: process.env.Nathan192127,
    database: "burgers_db"
  })
}
connection.connect();
// Export connection for our ORM to use.
module.exports = connection;
