require("dotenv").config();

//They export respective framework
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const surveyRoutes = require("./routes/surveyRoutes");
const responseRoutes = require("./routes/responseRoutes");

const app = express();

connectDB();//Connect db

app.use(cors()); //Middleware
app.use(express.json()); //Middleware       

app.use("/api/surveys", surveyRoutes); //AppRoute
app.use("/api/responses", responseRoutes) //Routing for responses


app.get("/", (req, res) => {
  res.send("Server Running");
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});