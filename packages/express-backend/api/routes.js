const express = require("express");

const router = express.Router();

//Import Controllers
const addQuestions = require("./controllers/addQuestions");
const getQuestions = require("./controllers/getQuestions");
const retrieveQuestion = require("./controllers/retrieveQuestion");
const updateQuestions = require("./controllers/updateQuestions");
const deleteQuestions = require("./controllers/deleteQuestions");

// api/questions

router.get("/", getQuestions);

// API requesting for question

router.post("/question", retrieveQuestion);

// POST

router.post("/addquestion", addQuestions);

// UPDATE

router.put("/updatequestion/:questionId", updateQuestions);

// DELETE

router.delete("/:questionId", deleteQuestions);

module.exports = router;
