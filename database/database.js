const Sequelize = require("sequelize")

const connection = new Sequelize('root','usuario','123456',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection