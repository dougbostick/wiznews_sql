const pg = require('pg');
const db = new pg.Client('postgres://localhost/wnews');

db.connect();



module.exports = db

//refactor using sequelize