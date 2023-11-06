const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  database: "automation",
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS automation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    column1 VARCHAR(255),
    column2 VARCHAR(255),
    column3 VARCHAR(255),
    column4 VARCHAR(255),
    column5 FLOAT,
    column6 VARCHAR(255),
    column7 VARCHAR(255),
    column8 VARCHAR(255)
  )
`;

db.query(createTableQuery, (err) => {
  if (err) {
    console.error("Error creating table: " + err.message);
  }
  db.end();
});

module.exports = { db };
