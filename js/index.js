const getErrorMessage = (input ,min=0, max=100) => {
  if(input.value == ""){
    return "Enter a value"
  } else if(parseInt(input.value) < min || parseInt(input.value) > max){
      return `Enter a correct number`
  }else if(!parseFloat(input.value)){
      return "Enter a number"
  } else {
      return ""
  }
}

if(document.getElementById('restartWon')){
  restartWon.addEventListener('click',()=>{
    location.reload()
  })
}

if(document.getElementById('restartLost')){
  restartLost.addEventListener('click',()=>{
    location.reload()
  })
}