const express = require("express")
const app = express()
const connection = require("./database/database")
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")
const session = require("express-session")
const Usuario = require("./database/Usuario")
const Cadastro = require("./database/Cadastro")
const Products = require("./produtos/Products")

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const productsController = require("./produtos/ProductsController")

connection
        .authenticate()
        .then(()=>{
            console.log("Conecção com banco de dados estabelecida")
        }) .catch((error)=>{
            console.log(error)
        })

app.use(session({
    secret: "pkopapksokakoskapokapoasok", cookie: { maxAge: 30000 }
}))

app.use("/", productsController)

app.get("/session", (req, res)=>{

})

app.get("/leitura", (req, res)=>{

})

//Rota principal
app.get("/", (req, res) =>{
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

//Rota contato

app.get("/contato", (req, res)=>{
    res.render("contato")
})

//Rota login

app.get("/login", (req, res)=>{
    res.render("login")
})

app.post("/salvarcadastro", (req,res) =>{
    let nome = req.body.nome
    let email = req.body.email
    let data = req.body.data
    let senha = req.body.senha

    Cadastro.findOne({where:{email: email}}).then(cadastros =>{
        if(cadastros == undefined){

            let salt = bcrypt.genSaltSync(10)
            let hash = bcrypt.hashSync(senha, salt)
            
            Cadastro.create({
                nome: nome,
                email: email,
                data: data,
                senha: hash
            }).then(()=>{
                    res.redirect("/")
            }).catch((err)=>{
                res.redirect("/")
            })
        }else{
            res.redirect("/salvarcadastro")
        }
    })


})

app.post("/salvarlogin",(req,res) =>{
   let email = req.body.email
   let senha = req.body.senha

   Usuario.findOne({where:{email: email}}).then(usuarios =>{
       if(usuarios != undefined){
            let correct = bcrypt.compareSync(senha, usuarios.senha)

            if(correct){
                req.session.usuarios = {
                    id: usuarios.id,
                    email: usuarios.email
                }
                res.json(req.session.usuarios)
            }else{
                res.redirect("/salvarcadastro")
            }
       }else{
           res.redirect("/salvarcadastro")
       }
   })
})


app.listen(8080, ()=>{
    console.log("Programa rodando!!")
})