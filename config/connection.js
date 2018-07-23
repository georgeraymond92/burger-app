var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
 connection = mysql.createConnection(proccess.env.JAWS_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"

  });

};



connection.connect();

module.exports = connection;