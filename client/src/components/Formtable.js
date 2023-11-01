import React, { useState } from 'react';
import "../App.css";
import { MdClose } from 'react-icons/md';

const FormTable = ({ handleSubmit, handleOnChange, handleclose, rest }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Regular expression for a 10-digit mobile number
    const mobilePattern = /^[0-9]{10}$/;

    // Regular expression for a valid email address
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!rest.mobile.match(mobilePattern)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    if (!rest.email.match(emailPattern)) {
      newErrors.email = "Invalid email address";
    }

    setErrors(newErrors);

    // Check if there are any errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitWithValidation = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit(e);
    }
  };

  return (
    <div className="addContainer">
      <form onSubmit={handleSubmitWithValidation}>
        <div className="close-btn" onClick={handleclose}><MdClose /></div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name} required/>

        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="email" onChange={handleOnChange} value={rest.email} required/>
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="mobile">Mobile: </label>
        <input type="number" id="mobile" name="mobile" onChange={handleOnChange} value={rest.mobile} required/>
        {errors.mobile && <p className="error">{errors.mobile}</p>}

        <label htmlFor="EmployeeID">Employee ID: </label>
        <input type="text" id="EmployeeID" name="EmployeeID" onChange={handleOnChange} value={rest.EmployeeID} required/>

        <label htmlFor="Department">Department:</label>
        <input type="text" id="Department" name="Department" onChange={handleOnChange} value={rest.Department} required/>

        <label htmlFor="Address">Address :</label>
        <input type="text" id="Address" name="Address" onChange={handleOnChange} value={rest.Address} required/>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default FormTable;
