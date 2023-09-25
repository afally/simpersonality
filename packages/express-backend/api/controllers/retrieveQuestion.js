const Question = require("../models/Question");

const retrieveQuestion = (req, res) => {
  const { number } = req.body;

  if (number) {
    Question.findOne({ number: req.body.number })
      .then((question) => {
        if (question) {
          return res.status(200).json({
            status: "success",
            data: {
              question,
            },
          });
        }
        return res.status(404).json({
          status: "error",
          message: "Question not found",
        });
      })
      .catch(() =>
        res.status(500).json({
          status: "error",
          message: "Something went wrong",
        })
      );
  } else {
    return res.status(404).json({
      status: "error",
      message: "No number selected",
    });
  }

  return null;
};

module.exports = retrieveQuestion;
