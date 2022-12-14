const mysql = require("mysql")

const db = mysql.createConnection(
    {
      host: 'localhost',
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