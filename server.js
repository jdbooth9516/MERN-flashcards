const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const categories = require("./routes/api/categories");
const flashcards = require("./routes/api/flashcards");

const port = process.env.PORT || 5000;

const db = require("./config/keys").mongoURI;

app.use(bodyParser.json());

// database connection
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DataBase Connection complete"))
  .catch((err) => console.log(err));

app.use("/api/categories", categories);
app.use("/api/flashcards", flashcards);

app.listen(port, () => console.log(`Server started on port ${port}`));
