require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const surveyRoutes = require("./routes/surveyRoutes");

const app = express();

connectDB();//Connect db

app.use(cors()); //Middleware
app.use(express.json()); //Middleware       

app.use("/api/surveys", surveyRoutes); //AppRoute


app.get("/", (req, res) => {
  res.send("Server Running");
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});