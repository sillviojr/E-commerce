const express = require("express")
const router = express.Router()
const Products = require("./Products")

router.get("/monitores", (req, res)=>{
    res.render("produtos/monitores")
})

router.get("/gabinetes", (req, res)=>{
    res.render("produtos/gabinetes")
})

router.get("/mouses", (req, res)=>{
    res.render("produtos/mouses")
})

router.get("/teclados", (req, res)=>{
    res.render("produtos/teclados")
})

router.get("/mousepads", (req, res)=>{
    res.render("produtos/mousepads")
})

router.get("/headsets", (req, res)=>{
    res.render("produtos/headsets")
})

router.get("/webcams", (req, res)=>{
    res.render("produtos/webcams")
})

