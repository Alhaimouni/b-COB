let schMod = require('./booksdb')

function handlebooks(req, res) {

    schMod.BookModel.find({},(error,result)=>{
        if(error) {
            console.log('error gitting data from db')
        }else {
            res.send(result); 
        }
    })

   
}

module.exports = {handlebooks};