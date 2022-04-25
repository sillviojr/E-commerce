const express = require("express")
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))


//Rota principal
app.get("/", (req, res) =>{
    res.send("Hello World!!!")
})

//Rota teste
app.get("/cadastro", (req, res)=>{
    res.render("home")
})



app.listen(8080, ()=>{
    console.log("Programa rodando!!")
})