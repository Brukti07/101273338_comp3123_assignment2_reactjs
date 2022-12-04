const express = require("express")
const EmployeeModel = require("../models/employee")

const routes =express.Router()


//Get ALL Employee
routes.get("/employee",async (req, res) =>{
    // res.send({message: "Get Employee"})
    try{
        const employee = await EmployeeModel.find()
        res.status(200).send(employee)
    }catch(error){
        res.status(500).send({message:"No Employee Found"})
    }
   
})
//Add New Employee
routes.post("/employee",async (req, res) =>{
    // res.send({message: "save Employee"})
    const newEmploye = new EmployeeModel(req.body)

    try{
        await newEmploye.save()
        res.status(400).send(newEmploye)
    } catch(error){
        res.status(500).send({message: "Error while inserting"})
    }
})
//DELETE Employee
routes.delete("/employee",(req, res) =>{
    res.send({message: "delete Employee"})
})
//UPDATE existing BOOK By ID
routes.patch ("/employee/:employeeid", async (req, res) =>{
    // res.send({message: "Updadate exisiting employee By Id"})
    try{
        const employee = req.body
        await EmployeeModel.findByIdAndUpdate(req.params.employeeid, employee)
        await EmployeeModel.save()
        res.status(202).send(employee)
    } catch (err){
        res.status(500).send(err)
    }

})


routes.get("/employee/sort",(req, res) =>{
    res.send({message: "get all Employee in sorted order"})
})

module.exports = routes