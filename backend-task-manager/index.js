const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");
require("dotenv").config();
const taskRoutes = require("./routes/task.routes");

const server = express();
const PORT = 8082;

connectDB();

server.use(express.json()); //middleware : Checks the content type header of the request. If it is application/json, it is going to parse the body of the request in json format. Without this, req.body will be undefined when it reaches the controller.
server.use(cors());

server.use("/tasks", taskRoutes);

server.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`)
});