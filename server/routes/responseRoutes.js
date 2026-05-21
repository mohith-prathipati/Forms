const express = require("express");
const router = express.Router();
//standard till here

const {
  submitResponse,
  getResponsesBySurvey,
} = require("../controllers/responseController");

router.post("/", submitResponse);
router.get("/:surveyId", getResponsesBySurvey);

module.exports = router;