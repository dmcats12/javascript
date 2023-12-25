function addtwonum(number1,number2){// this is called parameters 
   let result= number1+number2
   return result
   console.log("hitesh")// this will not be printed
}
const result=addtwonum(4,3)// this is called arguments

console.log("result:" , result)

function calculatecartprice(...num1){
   return num1
}
console.log(calculatecartprice(200,400,500)) // to add numbers or values in continuty we use rest and spread 
const user={
   name:"hitesh",
   price:199
}
function handleobject(anyobject){
   console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
}

handleobject(user)