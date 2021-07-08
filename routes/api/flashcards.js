const express = require("express");
const router = express.Router();

const Flashcard = require("../../models/Flashcard");

// @route GET api/flashcards
// @desc get all flashcards
// @access Public

router.get("/", (req, res) => {
  Flashcard.find().then((flashcards) => res.json(flashcards));
});

// @route POST api/flashcards
// @desc create new flashcard
// @access Public

router.post("/", (req, res) => {
  const newFlashcard = new Flashcard({
    question: req.body.question,
    answer: req.body.answer,
    categoryName: req.body.categoryName,
  });
  newFlashcard
    .save()
    .then((flashcard) => res.json(flashcard))
    .catch((err) => console.log(err))
});



// @route GET api/flashcards/catname
// @desc Get cards by category
// @access Public
router.get("/:name", (req, res) => {
    const name = req.params.name
    Flashcard
        .find({categoryName: name})
        .then((flashcard) => res.json(flashcard))
        .catch((err) => console.log(err))
  });

// @route GET api/flashcards/catname/cardid
// @desc Get single cards by category
// @access Public

router.get("/:name/:cardId", (req, res) => {
    const name = req.params.name;
    const cardId = req.params.cardId;
    
    Flashcard
        .find({ _id:cardId, categoryName: name})
        .then((catagory) => res.json(catagory))
        .catch((err) => console.log(err))
})

module.exports = router;
