import React, { Component } from 'react';
import EServer from '../routes/EServer';

class CreateEmployee extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            emailId: '' 

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }
    saveEmployee =(e) =>{
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee =>' +JSON.stringify(employee));

        EServer.createEmployee(employee).then(res => {
            this.props.history.push('/')

        });
    }

    changeFirstNameHandler=(event) =>{
        this.setState({firstName: event.target.value});

    }
    changeLastNameHandler=(event) =>{
        this.setState({lastName: event.target.value});

    }
    changeEmailHandler=(event) =>{
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-m-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'> Add Employee</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>First Name</label>
                                        <input placeholder='First Name' name='firstName' className='form-control' 
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler} />

                                    </div>
                                    <div className='form-group'>
                                        <label>Last Name</label>
                                        <input placeholder='Last Name' name='lastName' className='form-control' 
                                        value={this.state.lastName} onChange={this.changeLastNameHandler} />

                                    </div>

                                    <div className='form-group'>
                                        <label>Email Address</label>
                                        <input placeholder='Email Address' name='emailId' className='form-control' 
                                        value={this.state.emailId} onChange={this.changeEmailHandler} />

                                    </div>
                                    <button type="button" class="btn btn-success" onClick={this.saveEmployee}> Save </button>
                                    <button type="button" class="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                  


                                


                                </form>

                            </div>

                        </div>

                    </div>

                </div>
                
            </div>
        );
    }
}

export default CreateEmployee;