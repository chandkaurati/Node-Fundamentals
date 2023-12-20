const { copyFileSync } = require('fs')
const os = require('os')

 
console.log(os.arch())
console.log(os.platform())

console.log("detail about the network")
console.log(os.networkInterfaces()) // this  methods tells the network details about  your current system

console.log("system info")
console.log(os.cpus())
console.log(os.totalmem())
console.log(os.freemem())