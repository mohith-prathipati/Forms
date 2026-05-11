const express = require("express");

const router = express.Router();

//Redirects to controller
const {
  createSurvey,
  getSurveys,
  getSurveyById,
  updateSurvey,
  deleteSurvey,
} = require("../controllers/surveyControllers");

router.post("/", createSurvey);

router.get("/", getSurveys);

router.get("/:id",getSurveyById);

router.put("/:id",updateSurvey);

router.delete("/:id",deleteSurvey);

module.exports = router;