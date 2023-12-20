const figlet = require('figlet')


figlet('hello Moon', function(err, data){
    if(err){
        console.log('Someting web wrong ...');
        console.dir(err)
        return;
    }

    console.log(data)
})