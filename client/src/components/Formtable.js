import React from 'react'
import "../App.css"
import { MdClose } from 'react-icons/md'

const FormTable = ({handleSubmit, handleOnChange, handleclose,rest}) => {
    return (
        <div className="addContainer">
          <form onSubmit={handleSubmit}>
          <div class="close-btn" onClick={handleclose}><MdClose/></div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name}/>
  
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" name="email" onChange={handleOnChange} value={rest.email}/>
  
            <label htmlFor="mobile">Mobile: </label>
            <input type="number" id="mobile" name="mobile" onChange={handleOnChange} value={rest.mobile}/>
  
            <label htmlFor="EmployeeID">Employee ID: </label>
            <input type="text" id="EmployeeID" name="EmployeeID" onChange={handleOnChange} value={rest.EmployeeID}/>
  
            <label htmlFor="Department">Department:</label>
            <input type="text" id="Department" name="Department" onChange={handleOnChange} value={rest.Department}/>
  
            <label htmlFor="Address">Address :</label>
            <input type="Address" id="Address" name="Address" onChange={handleOnChange} value={rest.Address}/>
  
            <button className="btn">Submit</button>
          </form>
        </div>
    )
}

export default FormTable;