import React, { Component } from 'react'
import EServer from '../routes/EServer'

class ListEmployee extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees: []

        }
    }
   

    componentDidMount =() =>{
        EServer.getEmployee().then((res) => {
            this.setState({employee:res.data});
        })
    }
    // getEmployee = () =>{
    //     return axios.get(this.EMPLOYEE_API_BASE_URL);
    // }
    render() {
        return (
            <div>
                <h2 className="text-center"> Employee List </h2>
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
                            {/* {
                                this.state.employees.map(
                                    employees =>
                                    <tr key ={employee.id}>
                                        <td>{ employee.first_name}</td>
                                        <td>{ employee.last_name}</td>
                                        <td>{ employee.email_id}</td>
                                    </tr>
                                    )
                            } */}
                        </tbody>

                    </table>
                </div>


            </div>
        );
    }
}

export default ListEmployee;