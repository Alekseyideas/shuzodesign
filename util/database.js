const mySql = require('mysql2');

const pool = mySql.createPool({
	host: 'localhost',
	user: 'root',
	database: 'shuzodesign',
	password: 'terapylia240789'
});

module.exports = pool;