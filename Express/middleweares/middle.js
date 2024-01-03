function customMiddleOne(req, res, next){
    console.log("custom middlweare")
    next()
}

function customeMiddletwo(req,res, next){
    console.log("second  cusotm middleweare")
    next()
}


module.exports =  customMiddleOne