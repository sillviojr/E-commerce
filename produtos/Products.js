const Sequelize = require("sequelize")
const connection = require("../../JavaScript/CRUDCompleto/database/database")

const Products = connection.define('produtos',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    price:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Products