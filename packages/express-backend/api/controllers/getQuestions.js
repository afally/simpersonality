const Question = require('../models/Question');

const getQuestions = async (req, res) => {
  try {
    const question = await Question.find().sort({ number: 1 });

    if (!question) {
      return res.status(404).json({
        status: 'error',
        message: 'No Questions',
      });
    }

    return res.status(200).json({
      status: 'success',
      data: {
        question,
      },
    });
  } catch {
    return res.status(500).json({
      status: 'error',
      message: 'Something went wrong',
    });
  }
};

module.exports = getQuestions;
