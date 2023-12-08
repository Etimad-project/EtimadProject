// api.js
const express = require('express');
const userModel = require('./userModel'); // Import the model schema

const router = express.Router();

// Read data
router.get("/api/employee", async (req, res) => {
    const data = await userModel.find({});
    res.json({ success: true, data: data });
});

// Create data
router.post("/api/employee", async (req, res) => {
    console.log(req.body);
    const data = new userModel(req.body);
    await data.save();
    res.send({ success: true, message: "data saved successfully", data: data });
});

// Update
router.put("/api/employee", async (req, res) => {
    console.log(req.body);
    const { _id, ...rest } = req.body;
    console.log(rest);
    const data = await userModel.updateOne({ _id: _id }, rest);
    res.send({ success: true, message: "data updated successfully", data: data });
});

// Delete
router.delete("/api/employee/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await userModel.deleteOne({ _id: id });
    res.send({ success: true, message: "data deleted successfully", data: data });
});

module.exports = router;

