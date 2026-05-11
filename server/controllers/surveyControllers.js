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

const getSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find();

    res.status(200).json(surveys);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getSurveyById = async (req, res) => {
  try {
    const survey = await Survey.findById(
      req.params.id
    );

    if (!survey) {
      return res.status(404).json({
        message: "Survey not found",
      });
    }

    res.status(200).json(survey);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const updateSurvey = async (req, res) => {
  try {
    const { title, questions } = req.body;

    const updatedSurvey =
      await Survey.findByIdAndUpdate(
        req.params.id,
        {
          title,
          questions,
        },
        {
          new: true,
        }
      );

    if (!updatedSurvey) {
      return res.status(404).json({
        message: "Survey not found",
      });
    }

    res.status(200).json(updatedSurvey);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const deleteSurvey = async (req, res) => {
  try {
    const deletedSurvey =
      await Survey.findByIdAndDelete(
        req.params.id
      );

    if (!deletedSurvey) {
      return res.status(404).json({
        message: "Survey not found",
      });
    }

    res.status(200).json({
      message: "Survey deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  createSurvey,
  getSurveys,
  getSurveyById,
  updateSurvey,
  deleteSurvey,
};