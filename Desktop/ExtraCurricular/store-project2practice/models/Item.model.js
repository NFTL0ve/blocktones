
const  mongoose = require('mongoose');
const Schema = mongoose.Schema;


const itemSchema = new Schema(
    {
        name: String,
        price: Number,
        sizeing: String,
        
    },
);

module.exports = model('Item', itemSchema);