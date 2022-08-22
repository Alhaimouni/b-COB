'use strict'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const main = require('./modules/main');
const mongoose = require('mongoose');
const schMod = require('./modules/booksdb');
const books = require('./modules/handlebooks');
const all = require('./modules/handleAll');
const form = require('./modules/handleFromForm');
const del = require('./modules/handleDelete');

//=======================================================( Listeing )====================================================================

const server = express();
const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`listening on ${PORT}`));
server.use(cors());
server.use(express.json());
mongoose.connect(`mongodb://localhost:27017/books-shelf`);
// mongoose.connect(`${process.env.MONGO}`);

//=======================================================( END POINTS )==================================================================

server.get('/', main.handleMain);
server.get('/books', books.handlebooks);
server.post('/addBook', form.handleFromForm)
server.delete('/deleteBook', del.handleDelete);
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
