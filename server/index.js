const express = require('express')
const cors = require('cors')
const mongoose=require('mongoose')
const apiRouter = require('./api'); // Import the API endpoints

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000


mongoose.connect("mongodb://127.0.0.1:27017/crudoperation")
.then(()=>{
    console.log("connected to db")
    app.listen(PORT , ()=>console.log("Server is running"))
})
.catch((err)=>console.log(err))

app.use('/', apiRouter); // Use the API routes from api.js