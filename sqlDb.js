//connect to DB
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wnews')

//makes tables
const Users = db.define('users', { //makes a new users table
    name: Sequelize.STRING
})

const Posts = db.define('posts', { // makes a new posts table
    userid: Sequelize.INTEGER,
    title: Sequelize.STRING,
    content: Sequelize.STRING(500),
});



module.exports = { db, Users, Posts}; //exporting DB connection and TABLES 