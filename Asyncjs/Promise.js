const { resolveObjectURL } = require("buffer");
const { error } = require("console");

let promise1 = new Promise((resolve, reject)=>{
     const a = 5
     const b = 5 
     setTimeout(() => {
  if(a === b ){
     resolve("the promise has been resolved")
  }else{ 
    reject("the promise has been rejected")
  }
     }, 2000 );
})

promise1.then((val) => console.log(val))
.catch((err)=> console.log(err))
