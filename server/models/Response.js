const mongoose = require("mongoose");
//This schema is for storing responses
const responseSchema = new mongoose.Schema({
  surveyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Survey",
    required: true,
  },

  answers: [
    {
      question: String,
      answer: String,
    },
  ],

  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "Response",
  responseSchema
);