const Sequelize = require("sequelize")

const connection = new Sequelize('sql10498687','sql10498687','2hvNGB8L2S',{
    host: 'sql10.freesqldatabase.com',
    dialect: 'mysql'
})

module.exports = connection