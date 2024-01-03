function customeMiddletwo(req,res, next){
    console.log("second  cusotm middleweare")
    next()
}

module.exports = customeMiddletwo
