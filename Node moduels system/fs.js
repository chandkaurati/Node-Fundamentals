//fiels

const fs = require('fs')
const { fileURLToPath } = require('url')

// reading a filels

// there are two mehods one is readfles readfielssync  
// one is run asyn

// let filecontent = fs.readFileSync('f1.txt')

// console.log('the data of file one' +  filecontent )

// writing the fiels

//  const  writefile = fs.writeFileSync('f2.txt', 'chand kaurati')
 
//  console.log("file has been written") 

//  appent data files 

// fs.appendFileSync('f2.txt', 'this is an appended data' )




// delete the fiels 

// fs.unlinkSync('f3.txt')


// fs module with directories

//  to create the new directory
// fs.mkdirSync('mydirectory')

// check the conted inside of a directory 


// NOTE the while the providing path of the direcotry or file we  should add double slash between the path

 let foldercontent = fs.readdirSync('C:\\Users\\chand\\OneDrive\\node02\\Node moduels system')
console.log(foldercontent)

// // check weather the directory exist or not
// //  it will return the boolean value
//  let dir = fs.existsSync("mydirectory")
//  let fild = fs.existsSync('cp.js')
//  console.log(dir)
//  console.log(fild)

// delete the directory 

// fs.rmdirSync("mydirectory")



