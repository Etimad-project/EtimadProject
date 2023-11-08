// userModel.js
const mongoose = require('mongoose');

const schemaData = mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  EmployeeID: String,
  Department: String,
  Address: String,
}, {
  timestamps: true
});

const userModel = mongoose.model("user", schemaData);

module.exports = userModel;
