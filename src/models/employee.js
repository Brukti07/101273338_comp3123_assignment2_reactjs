const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true,
    },
    last_name: String,
    email_id: String
})

const employee = mongoose.model("employee", EmployeeSchema)
module.exports = employee