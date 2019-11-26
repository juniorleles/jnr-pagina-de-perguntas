const Sequelize = require('sequelize');


const connection = new Sequelize('guiaperguntas','root','jnr250025', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;
