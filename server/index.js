const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express();
require("dotenv").config();

app.use(cors())
app.use(express.json())


// brew services start mongodb-community@6.0
// brew services stop mongodb-community@6.0
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log("MongoDB connected successfully")
}).catch((err) => {
    console.log(`CONNECTION_ERROR: ${err.message}`)
})

//server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on port: ${process.env.PORT}`)
})