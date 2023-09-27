const Question = require('../models/Question');

const deleteQuestions = (req, res) => {
  const { questionId } = req.params;
  Question.findOneAndDelete({ number: questionId }) // we would get id from the URL
    .then((deletedQuestion) => {
      if (!deletedQuestion) {
        return res.status(404).json({
          status: 'error',
          message: 'Question not found',
        });
      }

      return res.status(200).json({
        status: 'success',
        data: {
          deletedQuestion,
        },
      });
    })
    .catch(() => res.status(404).json({ success: false }));
};

module.exports = deleteQuestions;
