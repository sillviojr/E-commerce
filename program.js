const express = require("express")
const app = express()
const connection = require("./database/database")
const bodyParser = require("body-parser")
const Usuario = require("./database/Usuario")
//const Cadastro = require("./database/Cadastro")
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

connection
        .authenticate()
        .then(()=>{
            console.log("Conecção com banco de dados estabelecida")
        }) .catch((error)=>{
            console.log(error)
        })

//Rota principal
app.get("/", (req, res) =>{
    res.render("home")
})

//Rota monitores
app.get("/monitores", (req, res)=>{
    res.render("monitores")
})

//Rota gabinetes
app.get("/gabinetes", (req, res)=>{
    res.render("gabinetes")
})

//Rota Mouses
app.get("/mouses", (req, res)=>{
    res.render("mouses")
})

//Rota Teclados
app.get("/teclados", (req, res)=>{
    res.render("teclados")
})

//Rota Mousepad
app.get("/mousepads", (req, res)=>{
    res.render("mousepads")
})

//Rota Headsets
app.get("/headsets", (req, res)=>{
    res.render("headsets")
})

//Rota Webcams
app.get("/webcams", (req, res)=>{
    res.render("webcams")
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
    let sobrenome = req.body.sobrenome
    let email = req.body.email
    let data = req.body.data
    let cpf = req.body.cpf
    let senha = req.body.senha

    Cadastro.create({
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        data: data,
        cpf: cpf,
        senha: senha
    }).then(()=>{
        res.redirect("/")
    })
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