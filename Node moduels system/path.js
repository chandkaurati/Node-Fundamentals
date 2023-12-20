const path =  require('path')


let ext = path.extname('C:\Users\chand\OneDrive\node02\f1.txt')
let basename = path.basename('C:\\Users\\chand\\OneDrive\\node02\\f1.txt')
// console.log(ext)   to extract the specific path of the given file path
 
// console.log(basename) to extract the base name fiels  NOTE : we shoud add double slashes in between the path 
//  is's nod's beviour just for security purpuse
 

console.log(__filename) // to get the path of file that you are currently working with
console.log(__dirname) //   to get the path of the directory that  you are currntly working  with 

