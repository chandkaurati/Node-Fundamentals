const cp = require('child_process')

// cp.execSync('calc')

// cp.execSync(" start chrome https://chat.openai.com/ ")

console.log('output ' + cp.execSync('node demo.js'))

