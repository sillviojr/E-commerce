const Sequelize = require("sequelize")

const connection = new Sequelize('ecomece','root','wol85701176',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection