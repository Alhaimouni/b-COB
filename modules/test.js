let x = require('../server');


function handleTest(req, res) {

    x.find({},(error,result)=>{
        if(error) {
            console.log('error gitting data from db')
        }else {
            res.send(result); 
        }
    })

   
}


module.exports = {handleTest};