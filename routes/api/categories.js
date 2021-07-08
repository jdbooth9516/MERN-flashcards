const express = require("express");
const router = express.Router();

const Category = require("../../models/Category");

// @route GET api/category
// @desc get all items
// @access Public

router.get("/", (req, res) => {
  Category.find().then((categories) => res.json(categories));
});

// @route POST api/category
// @desc Create a New category
// @access Public

router.post("/", (req, res) => {
  const newCategory = new Category({
    name: req.body.name,
  });
  newCategory
    .save()
    .then((category) => res.json(category))
    .catch((err) => console.log(err));
});

// @route PUT api/category
// @desc update a existing category
// @access Public

router.put("/:id", (req, res) => {
  const updatedCategory = req.body;
  Category.findById(req.params.id)
    .then((category) => {
      category.name = updatedCategory.name,
      category.totalCards = updatedCategory.totalCards, 
      res.json(category)
    })
    .catch((err) => console.log(err));
});

module.exports = router;
