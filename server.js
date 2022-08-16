'use strict'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const test = require('./modules/test');
const main = require('./modules/main');
const mongoose = require('mongoose');



//=======================================================( Listeing )====================================================================

const server = express();
const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`listening on ${PORT}`));
server.use(cors());
mongoose.connect('mongodb://localhost:27017/test1');

let dataSchema = new mongoose.Schema({
    name:String,
    age: String
})

let dataModel = mongoose.model('test',dataSchema);


function seedData() {
 
let x= new dataModel({
    name : 'ahmad',
    age : 'twenty'
});

x.save();


}


// seedData();


//=======================================================( END POINTS )==================================================================

server.get('/test', handleTest);


function handleTest(req, res) {

    dataModel.find({},(error,result)=>{
        if(error) {
            console.log('error gitting data from db')
        }else {
            res.send(result); 
        }
    })

   
}


server.get('/', main.handleMain);


module.exports = {dataModel};