import "./App.css";
import { useState} from "react";
// import React, { Component, useState } from 'react';

function AddEmployee(){
    const[firstname, setFirstName] = useState('')
    const[lastname, setLastName] = useState('')
    const[EmailId, setemailid] = useState('')

    const displayInfo = () =>{
        console.log(firstname + lastname + EmailId);
    };

    return(
        <div className="App">
          <div className="information">
            <label>FirstName:</label>
            <input type ="text" 
            onChange={(event)=> {
                setFirstName(event.target.value);
            }}/>
            <label>LastName:</label>
            <input type ="text"
              onChange={(event) => {
                setLastName(event.target.value);
            }}/>
            <label>EmailId:</label>
            <input type ="text"
              onChange={(event)=> {
                setemailid(event.target.value);
            }}/>
            <button >Add Employee</button>
            </div>
        </div>
    )
}
export default AddEmployee;