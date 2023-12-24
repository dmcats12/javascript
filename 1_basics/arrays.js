//array
const myarr = [0, 1, 2, 3, 4, 5]
console.log(myarr[0]) // array makes shallow copy sinsce its have heap memory
// we can also add strings in array
const myArr2 = new Array(1, 2, 3, 4, 5)
//arrays methods //
myarr.push(6)                         // myarr.push()
console.log(myarr)                    // myarr.pop()
myarr.unshift(9)                      // myarr.unshift
myarr.shift()                         // myarr.shift
console.log(myarr.includes(3))
const newArr = myarr.join()

console.log("A", myarr);
const mynewarr1 = myarr.slice(1, 3)
console.log(mynewarr1)


//splice//
const names = ["x", "Y", "z"]
const surname = ["a", "b", "c"]
names.push(surname);
console.log(names);

const fullname = surname.concat(names)
console.log(fullname)

const fullnames = [...names, ...surname]
const anotherarray = [1, 2, 3, 4,[3, 4, 5, 6[7, 8], 5, 6, 7[4, 5, 5, 6, 7, 8, 9]]]
const realarr = anotherarray.flat(Infinity)
console.log(realarr)
console.log(Array.isArray("hitsh"))
console.log(Array.from("hitsh"))