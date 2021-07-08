const mongoose = require('mongoose');
const Category = require('./Category');
const Schema = mongoose.Schema;

const FlashcardSchema = new Schema ({
    question: {
        type: String, 
        required: true, 
    },
    answer: { 
        type: String,
        required: true,
    },
    categoryName: {
        type: String,
        required: true
    }
})

module.exports = Flashcard = mongoose.model('Flashcard', FlashcardSchema);
