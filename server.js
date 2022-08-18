'use strict'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const main = require('./modules/main');
const mongoose = require('mongoose');
const schMod = require('./modules/booksdb');
const books = require('./modules/handlebooks');
const all = require('./modules/handleAll')

//=======================================================( Listeing )====================================================================

const server = express();
const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`listening on ${PORT}`));
server.use(cors());
mongoose.connect('mongodb://localhost:27017/books-shelf');

//=======================================================( END POINTS )==================================================================

server.get('/', main.handleMain);
server.get('/books', books.handlebooks);
server.get('*', all.handleAll);

//=======================================================( FUNCTIONS )==================================================================

function seedData() {

    let book1 = new schMod.BookModel({ 
        title:'Physics',
        description: "good book",
        status:'active'
    })
    
    let book2 = new schMod.BookModel({ 
        title:'Math',
        description: "good book",
        status:'active'
    })
    
    let book3 = new schMod.BookModel({ 
        title:'Math',
        description: "good book",
        status:'inactive'
    })
    
    book1.save();
    book2.save();
    book3.save();
    
    }
    // seedData();
