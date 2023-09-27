const Question = require('../models/Question');

const addQuestions = (req, res) => {
  const date = Date.now(); // yyyy-mm-dd.
  const { number } = req.body;
  const questionz = req.body.question;
  const { name } = req.body;
  const { optiona } = req.body;
  const { optionb } = req.body;
  const { optionc } = req.body;
  const { optiond } = req.body;

  if (questionz) {
    Question.findOne({ number: req.body.number })
      .then((question) => {
        if (question) {
          return res.status(400).json({ question: 'Question number exists' });
        }
        const newQuestion = new Question({
          date,
          number,
          question: questionz,
          name,
          optiona,
          optionb,
          optionc,
          optiond,
        });
        newQuestion
          .save()

          .then((savedQuestion) => res.status(200).json({
            status: 'success',
            data: {
              savedQuestion,
            },
          }))
          .catch(() => res.status(500).json({
            status: 'error',
            message: 'something went wrong',
          }));
        return null;
      })
      .catch(() => {
        res.status(500).json({
          status: 'error',
          message: 'something went wrong',
        });
      });
  } else {
    return res.status(404).json({
      status: 'error',
      message: 'Nos item selected',
    });
  }
  return null;
};

module.exports = addQuestions;
