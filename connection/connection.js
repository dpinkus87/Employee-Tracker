// COMPLETED

const mysql = require("mysql2")

const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '1610Marion$',
      database: 'employee_db'
    },
  );
db.connect((err) => {
    if (err) throw err
})
  module.exports = db;