function placeOrder(drink){
      return new Promise((resolve, reject)=>{
         if(drink === "cofee"){
             resolve("cofee ")
         }else{
             console.log('the order has been rejected')   
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

async function serveOrder(){
    let orderplaced = await placeOrder('cofee')
    console.log(orderplaced)
    let processeorder =  await ProcessOrder(orderplaced)
    console.log(processeorder)
}

// serveOrder()


let input = 'Usd'
async  function getdata(curr){
 try {
  let res =  await fetch(`https://api.exchangerate-api.com/v4/latest/${input}`)
  let data =  await res.json()
  return data 
} catch (error) {
     console.log(error)
 }
}


let obj = getdata(input)
function convert(obj){
    obj.then((val)=>{ 
        console.log(val)
    })
}


convert(obj)


