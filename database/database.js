const Sequelize = require("sequelize")

const connection = new Sequelize('sql10496928','sql10496928','DyBusW8zED',{
    host: 'sql10.freesqldatabase.com',
    dialect: 'mysql'
})

module.exports = connection