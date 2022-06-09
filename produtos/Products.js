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

Products.sync({force:true}).then(()=>{})

module.exports = Products