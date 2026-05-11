const express = require("express");

const router = express.Router();

//Redirects to controller
const {
  createSurvey,
} = require("../controllers/surveyControllers");

router.post("/", createSurvey);

module.exports = router;