const express = require("express")
const app = express()
const connection = require("./database/database")
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")
const session = require("express-session")
const adminAuth = require("./middlewares/adminAuth")
const Usuario = require("./database/Usuario")
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
    secret: "pkopapksokakoskapokapoasok", cookie: { maxAge: 900000 }
}))

app.use("/", productsController)

//Rota principal
app.get("/", (req, res) =>{
    res.render("home")
})

//Rota Rastreio
app.get("/rastreio", adminAuth ,(req, res)=>{
    res.render("rastreio")
})


// rota carrinho

app.get("/carrinho", adminAuth ,(req, res)=>{
    res.render("carrinho")
})

//Rota contato

app.get("/contato", (req, res)=>{
    res.render("contato")
})

//Rota cadastro
app.get("/cadastro", (req, res)=>{
    res.render("cadastro")
})

app.post("/salvarcadastro", (req,res) =>{
    let nome = req.body.nome
    let email = req.body.email
    let data = req.body.data
    let senha = req.body.senha

    Usuario.findOne({where:{email: email}}).then(usuarios =>{
        if(usuarios == undefined){

            let salt = bcrypt.genSaltSync(10)
            let hash = bcrypt.hashSync(senha, salt)
            
            Usuario.create({
                email: email,
                senha: hash
            }).then(()=>{
                    res.redirect("/")
            }).catch((err)=>{
                res.redirect("/")
            })
        }else{
            res.redirect("/cadastro")
        }
    })

})

//Rota login

app.get("/login", (req, res)=>{
    res.render("login")
})

app.get("/logout", (req, res)=>{
    req.session.usuarios = undefined
    res.redirect("/")
})

app.post("/authenticate",(req,res) =>{
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
                res.redirect("/")
            }else{
                res.redirect("/login")
            }
       }else{
           res.redirect("/login")
       }
   })
})


app.listen(8080, ()=>{
    console.log("Programa rodando!!")
})