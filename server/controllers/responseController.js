const Response = require("../models/Response");

const submitResponse = async (req, res) => {
  try {
    const { surveyId, answers } = req.body; //data sent by frontend

    const response = new Response({
      surveyId,
      answers,
    });

    const savedResponse =
      await response.save();

    res.status(201).json(savedResponse);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getResponsesBySurvey = async (
  req,
  res
) => {
  try {
    const responses =
      await Response.find({
        surveyId: req.params.surveyId,
      });

    res.status(200).json(responses);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  submitResponse,
  getResponsesBySurvey,
};