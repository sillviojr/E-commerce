const express = require("express")
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))


//Rota principal
app.get("/home", (req, res) =>{
    res.render("home")
})

//Rota teste
app.get("/cadastro", (req, res)=>{
    res.render("cadastro")
})



app.listen(8080, ()=>{
    console.log("Programa rodando!!")
})