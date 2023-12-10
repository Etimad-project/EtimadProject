import logo from './logo.svg';
import './App.css';
import { MdClose } from "react-icons/md"
import React, { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';
import FormTable from './components/Formtable';
import Navbar from './components/Navbar';

axios.defaults.baseURL = "http://localhost:3000/api/employee";

function App() {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    EmployeeID: "",
    Department: "",
    Address: "",
  });
  const [formDataEdit, setFormDataEdit] = useState({
    name: "",
    email: "",
    mobile: "",
    EmployeeID: "",
    Department: "",
    Address: "",
    _id: "",
  });
  const [dataList, setDataList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("/", formData);
    console.log(data);
    if (data.data.success) {
      setAddSection(false);
      getFetchData();
      alert(data.data.message);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        EmployeeID: "",
        Department: "",
        Address: "",
      });
    }
  };

  const getFetchData = async () => {
    const data = await axios.get("/");
    console.log(data);
    if (data.data.success) {
      setDataList(data.data.data);
      setFilteredData(data.data.data); // Initialize filteredData with all data
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  const handleDelete = async (id) => {
    const data = await axios.delete("/" + id);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.put("/", formDataEdit);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
      setEditSection(false);
    }
  };

  const handleEditOnChange = (e) => {
    const { value, name } = e.target;
    setFormDataEdit((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (el) => {
    setFormDataEdit(el);
    setEditSection(true);
  };

  const handleSearch = () => {
    const searchTerm = searchInput.toLowerCase();
    const filtered = dataList.filter(
      (el) =>
        el.name.toLowerCase().includes(searchTerm) ||
        el.email.toLowerCase().includes(searchTerm) ||
        el.mobile.toLowerCase().includes(searchTerm) ||
        el.EmployeeID.toLowerCase().includes(searchTerm) ||
        el.Department.toLowerCase().includes(searchTerm) ||
        el.Address.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  };

  const handleClearSearch = () => {
    setSearchInput("");
    setFilteredData(dataList);
  };

  return (
    <>
    
    

<div className="navbar">
  <h1>Project Salam</h1>
  
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search..."
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
    <button className="searchbtn" onClick={handleSearch}>Search</button>
    <button onClick={handleClearSearch}>Clear Search</button>
  </div>
</div>

    
      

        <button className="btn btn-add" onClick={() => setAddSection(true)}>
          Add
        </button>
        {addSection && (
          <FormTable
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            handleclose={() => setAddSection(false)}
            rest={formData}
          />
        )}
        {editSection && (
          <FormTable
            handleSubmit={handleUpdate}
            handleOnChange={handleEditOnChange}
            handleclose={() => setEditSection(false)}
            rest={formDataEdit}
          />
        )}

        <div className='tableContainer'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>EmpID</th>
                <th>Department</th>
                <th>Address</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((el) => (
                  <tr key={el._id}>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>{el.mobile}</td>
                    <td>{el.EmployeeID}</td>
                    <td>{el.Department}</td>
                    <td>{el.Address}</td>
                    <td>
                      <button
                        className='btn btn-edit'
                        onClick={() => handleEdit(el)}
                      >
                        Edit
                      </button>
                      <button
                        className='btn btn-delete'
                        onClick={() => handleDelete(el._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan='7' style={{ textAlign: "center" }}>
                    No data to display
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      
    </>
  );
}

export default App;
