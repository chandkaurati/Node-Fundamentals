const { error } = require('console')
const  fs  = require('fs')

console.log("f line")

  fs.readFile("file1.md", callback)

 function callback(err, data){
    if(err){
     console.log(err)
    }

    console.log(`file one data ${data}`)
}

fs.readFile('File2.md', callbacktow)

 function  callbacktow  (err, data){
    if(err){
     console.log(err)
    }

    console.log(`fil two  data ${data}`)
}

console.log("last line")