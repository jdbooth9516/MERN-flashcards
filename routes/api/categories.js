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

router.put("/:name", async (req, res) => {
  let category = await Category.find({ name: req.params.name });
  console.log(category[0])
  category = Category.findByIdAndUpdate({ _id: category[0]._id }, req.body).then(() => {
    const updatedCategory = Category.findOne({_id: category._id}).then(() => {
    }).catch((err) => console.log(err));
    console.log(updatedCategory)
    res.json(updatedCategory)
  })
});


module.exports = router;
