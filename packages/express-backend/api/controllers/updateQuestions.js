const Question = require("../models/Question");

const updateQuestions = (req, res) => {
  const { questionId } = req.params;
  const { question, optiona, optionb, optionc, optiond } = req.body;

  Question.findOneAndUpdate(
    questionId,
    {
      question,
      optiona,
      optionb,
      optionc,
      optiond,
    },
    { new: true }
  )
    .then((updatedQuestion) => {
      if (!updatedQuestion) {
        return res.status(404).json({
          status: "error",
          message: "Question not found",
        });
      }
      return res.status(200).json({
        status: "success",
        data: {
          updatedQuestion,
        },
      });
    })
    .catch(() => {
      res.status(500).send({
        status: "error",
        message: "something went wrong",
      });
    });
};

module.exports = updateQuestions;
