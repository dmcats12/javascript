// generate a random color 
const randomcolor = function(){
    const hex ="0123456789ABCDEF"
    let color ='#'
    for(let i=0;i<6;i++){
    color +=hex(Math.floor(Math.random)*16)
    }
    return color
};
let INtervalid;
const StartChangingColor =function(){
    INtervalid= setInterval(Changebgcolor,1000);
    function Changebgcolor() {
    document.body.style.backgroundColor=randomcolor
   }
}
const stopChangingcolor= function(){
    clearInterval(INtervalid);
}

 document.querySelector("#start").addEventListener('click',StartChangingColor)
 document.querySelector("#stop").addEventListener('click',stopChangingcolor)