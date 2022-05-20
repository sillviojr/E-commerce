const Sequelize = require("sequelize")
const connection = require("./database")

const Usuario = connection.define('usuario',{
    login:{
        type:Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type:Sequelize.STRING,
        allowNull: false
    } 
})

Usuario.sync({force:false}).then(()=>{})

module.exports = Usuario