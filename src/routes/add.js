const express = require("express")

const routes =express.Router()

routes.get("/get",(req, res) =>{
    res.send({message: "Get Faculty"})
})

routes.post("/add",(req, res) =>{
    res.send({message: "save Faculty"})
})

routes.delete("/remove",(req, res) =>{
    res.send({message: "delete Faculty"})
})
routes.get("/getall",(req, res) =>{
    res.send({message: "get all Faculty"})
})

module.exports = routes