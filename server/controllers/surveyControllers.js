const Survey = require("../models/Survey");

const createSurvey = async (req, res) => {
  try {
    const { title, questions } = req.body;

    //Creates Survey Object
    const survey = new Survey({
      title,
      questions,
    });

    const savedSurvey = await survey.save();

    res.status(201).json(savedSurvey);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  createSurvey,
};