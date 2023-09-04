const items=[
    {name:"shirt",price:25},
    {name:"pant",price:50}
]

let tot=items.reduce((acc,currVal,index,array)=>{
        return acc+(currVal.price-(currVal.price*0.1))
},0)
console.log(tot)

