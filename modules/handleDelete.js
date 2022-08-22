const schMod = require('./booksdb');


function handleDelete(req, res) {
    let {value} = req.query;
    schMod.BookModel.remove({_id : value},(err,result)=>{})
    schMod.BookModel.find({},(err, result)=>{ 
        res.send(result)
    })

        
}











module.exports = {handleDelete};