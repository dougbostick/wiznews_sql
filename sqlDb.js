const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wnews')

const Users = db.define('users', {
    name: Sequelize.STRING
})

const Posts = db.define('posts', {
    userid: Sequelize.INTEGER,
    title: Sequelize.STRING,
    content: Sequelize.STRING(500),
});



module.exports = { db, Users, Posts};