


if(true){
    let a = 10 // this will be in the local scope 
    const b=20 // this will be in the local scope 
    var c=30.  // this will be accessable even after this scope ////do var is not right 
    console.log(a)
}

a = 30 // this is global scope 
console.log(a)

function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username)// this username can be used since it is in the father function 
    }
    two()// this will only be printed one two is called
}
one()


//++++++++++++++ interseting+++++++++++++++//
function addone(num){
    return num+1
}
addone(5)
const addtwo = function (num){
    return num+2
}
addtwo(2)// this addtwo function should not be called before its declaration 
