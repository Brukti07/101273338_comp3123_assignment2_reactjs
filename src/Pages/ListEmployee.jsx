import React, { Component } from 'react'
import EServer from '../routes/EServer'

class ListEmployee extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees: []

        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
    }

    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
    }
   

    componentDidMount =() =>{
        EServer.getEmployee().then((res) => {
            this.setState({employees: res.data});
        })
    }
    // getEmployee = () =>{
    //     return axios.get(this.EMPLOYEE_API_BASE_URL);
    // }

    addEmployee(){
        this.props.history.push('/add-employee');
    }

    
    render() {
        return (
            <div>
                <h2 className="text-center"> Employee List </h2>
                <div className='row'>
                    
                    <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button>

                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bruktawit</td>
                                <td>Adugna</td>
                                 <td>bruktawit.adugn@georgebrown.com</td>
                                <td>
                                   <button onClick={this.editEmployee} className="btn btn-info">Update</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Lala</td>
                                <td>Adem</td>
                                 <td>lala0945@georgebrown.com</td>
                                 <td>
                                   <button onClick={this.editEmployee} className="btn btn-info">Update</button>
                                </td>
                            </tr>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key ={employee.id}>
                                        <td>{ employee.firstName}</td>
                                        <td>{ employee.lastName}</td>
                                        <td>{ employee.emailId}</td>
                                        <td>
                                            <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                        </td>
                                        
                                    </tr>
                                    )
                            }
                        </tbody>

                    </table>
                </div>


            </div>
        );
    }
}

export default ListEmployee;