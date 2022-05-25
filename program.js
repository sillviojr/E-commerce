const express = require("express")
const app = express()
//const connection = require("./database/database")
const bodyParser = require("body-parser")
//const Usuario = require("./database/Usuario")

app.set('view engine', 'ejs')
app.use(express.static('public'))



/*connection
        .authenticate()
        .then(()=>{
            console.log("Conecção com banco de dados estabelecida")
        }) .catch((error)=>{
            console.log(error)
        })
*/
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

//Rota cadastro
app.get("/cadastro", (req, res)=>{
    res.render("cadastro")
})

// rota carrinho

app.get("/carrinho", (req, res)=>{
    res.render("carrinho")
})

app.post("/salvarLogin", (req,res) =>{
    let email = req.body.email
    let senha = req.body.senha
})

app.post("/salvarcadastro", (req,res) =>{
    let nome = req.body.nome
    let sobrenome = req.body.sobrenome
    let email = req.body.email
    let data = req.body.data
    let cpf = req.body.cpf
    let senha = req.body.senha
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