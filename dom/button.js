const buttons =document.querySelectorAll('.button')
const body =document.querySelector('body')

buttons.foreach(function(button){
    button.addeventListner('click',function(e){
        console.log(e)
        console.log(e.target)
        if (e.target.id=='grey'){
            body.style.backgroundColor=e.target.id(grey)
        }
        if (e.target.id=='yello'){
            body.style.backgroundColor=e.target.id(yello)
        }
        if (e.target.id=='green'){
            body.style.backgroundColor=e.target.id(green)
        }
        if (e.target.id=='blue'){
            body.style.backgroundColor=e.target.id(blue)
        }
    })
})