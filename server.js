const express =require("express")
const addRoutes = require("./routes/add")
const employeeRoutes = require("./routes/employee")
const mongoose = require("mongoose")
const EmployeeModel = require("./models/Employee")


const app = express();

// const SERVER_PORT = 3001
// const CLIENT_PORT = 3000

app.use(express.json())
app.use(express.urlencoded())

mongoose.connect("mongodb+srv://Bruktawit:Song%3ADv7@cluster0.kyeqpin.mongodb.net/Assignment2?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true

})


app.use("/addEmployee", addRoutes)

app.use("/api/v1/", employeeRoutes)

app.route("/")
    .get((req, res)=>{
        res.send({message: "GET - HOME"})

    })
    .post((req, res) =>{
        res.send({message:"POST - HOME"})

    })
    .put((req, res) =>{
        res.send({message:"PUT - HOME"})

    })
    .delete((req, res) =>{
        res.send({message:"DELETE - HOME"})

    })


app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
});
// app.listen(SERVER_PORT, () => {
//     console.log(`Server running at http://localhost:${CLIENT_PORT}/`)
// });

