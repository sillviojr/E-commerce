const express = require("express")
const app = express()
//const connection = require("./database/database")
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")
//const Usuario = require("./database/Usuario")
//const Cadastro = require("./database/Cadastro")
//const Products = require("./produtos/Products")

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const productsController = require("./produtos/ProductsController")

/*connection
        .authenticate()
        .then(()=>{
            console.log("Conecção com banco de dados estabelecida")
        }) .catch((error)=>{
            console.log(error)
        })
*/

app.use("/", productsController)

//Rota principal
app.get("/home", (req, res) =>{
    res.render("home")
})

//Rota Rastreio
app.get("/rastreio", (req, res)=>{
    res.render("rastreio")
})

//Rota cadastro
app.get("/cadastro", (req, res)=>{
    res.render("cadastro")
})

// rota carrinho

app.get("/carrinho", (req, res)=>{
    res.render("carrinho")
})


app.post("/salvarcadastro", (req,res) =>{
    let nome = req.body.nome
    let email = req.body.email
    let data = req.body.data
    let senha = req.body.senha

    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(senha, salt)
    
    /*Usuario.create({
        nome: nome,
        email: email,
        data: data,
        senha: hash
    }).then(()=>{
            res.redirect("/")
    }).catch((err)=>{
        res.redirect("/")
    })*/
})

app.post("/salvarlogin",(req,res) =>{
   let email = req.body.email
   let senha = req.body.senha
   Usuario.create({
        email: email, 
        senha: senha
   }).then(()=>{
       res.redirect("/home")
   }) 
})


app.listen(8080, ()=>{
    console.log("Programa rodando!!")
})