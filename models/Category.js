const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema ({
    name: {
        type: String, 
        required: true, 
    },
    totalCards: { 
        type: Number,
        default: 0
    }
})

module.exports = Category = mongoose.model('Category', CategorySchema);
