//singletons
// object.create.    constructor way//
// object literals

const jsuser={
  name:"hitesh",
  age:14,
  gmail:"hitesh@google.com",
  isloggedIN:false,
}
console.log(jsuser["name"])

jsuser.gmail="hitesh@gmail.com"
// we can also freeze our object  by object.jsuser(freeze)


// singleton
const tinderuser= new object()
   tinderuser.id=1234
   tinderuser.name="sammy"