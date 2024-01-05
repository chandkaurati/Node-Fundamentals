function customMiddleOne(req, res, next){
    console.log("custom middlweare")
    next()
}

module.exports =  customMiddleOne