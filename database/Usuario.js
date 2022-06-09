const Sequelize = require("sequelize")
const connection = require("./database")

const Usuario = connection.define('usuarios',{
    login:{
        type:Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type:Sequelize.STRING,
        allowNull: false
    },
    pin:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Usuario.sync({force:true}).then(()=>{})

module.exports = Usuario