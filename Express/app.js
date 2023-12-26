const express  = require("express")

const app = express()
// HTTP methods
// get, post, put , delete 


// this method use access some data form the particulate resorces

// this method will take two agruments 
// first is route / route is basically where we will be requesting for our data
// second is two  object {response}, {request} parameters
app.get('/', (req, res)=>{
 res.send("Got the data form the server")
})

app.get('/about', (req,res)=>{
     res.send("web create Impact")
})

app.get('/contact', (req,res)=>{
     res.send("this is and contact us page")
})
app.get('/contact/myinfo', (req,res)=>{
     res.send("Name: chand kaurati : Frontend SDE")
})

const Port =  process.env.PORT || 3000

app.listen(Port,()=> console.log(`"the port is running on this from the Enviornmental variables  ${Port}"`))


 