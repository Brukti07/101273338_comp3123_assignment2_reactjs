const express = require("express")
const employee = require("../models/employee")
const EmployeeModel = require("../models/employee")

const routes =express.Router()


//Get ALL Employee
routes.get("/employee",async (req, res) =>{
    try{
        const employee = await EmployeeModel.find()
        res.status(200).send(employee)
    }catch(error){
        res.status(500).send({message:"No Employee Found"})
    }
   
})
//Add New Employee
routes.post("/employee",async (req, res) =>{
    const newEmploye = new EmployeeModel(req.body)

    try{
        await newEmploye.save()
        res.status(400).send(newEmploye)
    } catch(error){
        res.status(500).send({message: "Error while inserting"})
    }
})
//sort Employee
routes.get("/employee/sort",(req, res) =>{
    
})
//UPDATE existing BOOK By ID
routes.patch ("/employee/:employeeid", async (req, res) =>{
    // res.send({message: "Updadate exisiting employee By Id"})
    try{
        console.log(req.body)
        const updatedEmployee = await EmployeeModel.findByIdAndUpdate(req.params.employeeid, employee)
        const nb = await updatedEmployee.save()
        res.status(202).send(nb)
    } catch (err){
        res.status(500).send(err)
    }

})


routes.delete("/employee/:employeeid", async(req, res) =>{
    try{
        const employee = await EmployeeModel.findByIdAndDelete(req.params.id)
        if(!employee){
            res.status(404).send("No item found")
        }
        res.status(200).send(employee)

    } catch(err){
        res.status(500).send(err)
    }
})

module.exports = routes