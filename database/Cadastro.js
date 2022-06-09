const Sequelize = require("sequelize")
const connection = require("./database")

const Cadastro = connection.define('cadastros',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    data:{
        type: Sequelize.DATE,
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Cadastro.sync({force:true}).then(()=>{})

module.exports = Cadastro