function placeOrder(drink){
      return new Promise((resolve, reject)=>{
         if(drink === "cofee"){
             resolve("cofee ")
         }else{
             console.log('the drink is not an cofee')   
         }
      })
}

function ProcessOrder(order){
     return new Promise((resolve, reject)=>{
         console.log("order is being processed")
         resolve(`${order} is served`)
     })
}


// placeOrder('cofee').then((val)=>{
//      console.log(val)
//      let processed =  ProcessOrder(val)
//      return processed 
// }).then((data)=>{
//     console.log(data)
// })

// Solve the problem using the asyn await