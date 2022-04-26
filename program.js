const express = require("express")
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))


//Rota principal
app.get("/", (req, res) =>{
    res.render("home")
})

//Rota cadastro
app.get("/cadastro", (req, res)=>{
    res.render("cadastro")
})



app.listen(8080, ()=>{
    console.log("Programa rodando!!")
})