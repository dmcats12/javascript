const user={
    username: "hitesh ",
    price:199,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to the website`)// we use this to access the variables of this context 
    }
}
user.welcomemessage()
user.username="sam"
user.welcomemessage()

function coffee(){
    let username="hitesh"
    console.log(this)
}
coffee()

const addtwo=(num1,num2) => {
    return num1+num2
}
console.log(addtwo(3,4))

//immediately invoked function expression
// to protect from the global pollution we use iffi 