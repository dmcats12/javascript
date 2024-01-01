const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventdefault()
  const height =(document.querySelector('#height').value)
  const weight =(document.querySelector('#weight').value)
  const result= document.querySelector('#result')

  if (height===""|| height<0||isNaN(height)){
    result.innerHTML="please write a valid height"
  }
  else if (weight===""|| weight<0||isNaN(weight)){
    result.innerHTML="please write a valid weight"
  }
  else{
    const bmi=(weight/((height*height)/1000)).toFixed(2);
    result.innerHTML=<span>${bmi}</span>
  }
})