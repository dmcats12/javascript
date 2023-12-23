//array
const myarr=[0,1,2,3,4,5]
console.log(myarr[0]) // array makes shallow copy sinsce its have heap memory
// we can also add strings in array
const myArr2= new Array(1,2,3,4,5)
//arrays methods //
myarr.push(6)                         // myarr.push()
console.log(myarr)                    // myarr.pop()
myarr.unshift(9)                      // myarr.unshift
myarr.shift()                         // myarr.shift
console.log(myarr.includes(3))
console.log(myarr.indexof(3))
const newArr=myarr.join()

console.log("A",myarr);
const mynewarr1=myarr.slice(1,3)
console.log(mynewarr1)


//splice



