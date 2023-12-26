let add = ((a,b)=>{
  console.log(a + b)
})

let mult= ((x, y)=>{
    console.log(x * y)
})
let  div = ((x, y)=>{
    console.log(x / y)
})
let  sub = ((x, y)=>{
    console.log(x - y)
})

module.exports = {
    addition : add,
    exponantiona : mult,
    subtraciton  :  sub,
    division  : div,
}