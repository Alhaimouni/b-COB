const mongoose = require('mongoose');


let Book = new mongoose.Schema({
    title:String,
    description: String,
    status:String
})

let BookModel = mongoose.model('booksdb',Book);

module.exports = {Book, BookModel};