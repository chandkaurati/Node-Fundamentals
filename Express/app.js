const express  = require("express")

const app = express()
// HTTP methods
// get, post, put , delete 


// this method use access some data form the particulate resorces

// this method will take two agruments 
// first is route / route is basically where we will be requesting for our data
// second is two  object {response}, {request} parameters
 
// Middle weare // the middlewere is basically Express.json()
// we just have to add this method so  tha the all data will be passed in to the Json() 
app.use(express.json())

const cources = [
     {id:1, name :"jvascript"},
     {id:2, name :"python"},
     {id:3, name :"Java"},
     {id:4, name :"Rust"},
] 


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

                                 
app.get('/cources',(req,res)=>{
     res.send(cources)
})

app.post('/cources', (req, res)=>{
     const cource = {
          id :cources.length  + 1,
          name : req.body.name  
     }  
     
     cources.push(cource)
     res.send(cource)
})
// Route parameters
 app.get('/courses/:id', (req,res)=>{
    let course = cources.find(course => course.id === parseInt(req.params.id))
     console.log(req.params.id)
   if(!course)res.status(404).send("This course not available")
    res.send(course)
 })


const Port =  process.env.PORT || 3000


app.listen(Port,()=> console.log(`"the port is running on this from the Enviornmental variables  ${Port}"`))


