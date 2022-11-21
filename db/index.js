const pg = require('pg');
const db = new pg.Client('postgres://localhost/wnews');

db.connect();

const Sequelize = require('sequelize');
const sqlDb = new Sequelize('postgres://localhost:5432/garden');



module.exports = { db, sqlDb };

//refactor using sequelize