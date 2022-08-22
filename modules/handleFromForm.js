const schMod = require('./booksdb');



function handleFromForm(req, res) {
    console.log(req.body);
     let {title, description, status} = req.body;


    //======================================================( Without Create )===========================================================

    // let newBook = new schMod.BookModel({
    //     title: title,
    //     description: description,
    //     status: status
    // })
   
    // newBook.save();

    //========================================================( WithCreate )===============================================================

    schMod.BookModel.create({
        title: title,
        description: description,
        status: status
    })

    //======================================================================================================================================


    schMod.BookModel.find({},(error,result)=>(error)?res.send('eroooooooor'):res.send(result));
}



module.exports = {handleFromForm};