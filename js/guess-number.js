
let upperLimit, counter, guessNumber, randomNumber
let isWon = false
let modal = document.querySelector("#modal");

let inputUpperLimit = document.getElementById('upperLimit')
let inputTry = document.getElementById('counter')
let inputGuessNumber = document.getElementById('guessNumber')


$('.start').click(function(){


  let errorMessageHighestNumber = getErrorMessage(inputUpperLimit,0,1000)
  let errorMessageTry = getErrorMessage(inputTry,0,1000)

  if(errorMessageHighestNumber != ""){
    inputUpperLimit.value=""
    inputUpperLimit.placeholder = errorMessageHighestNumber
    inputUpperLimit.className="errorInput"
  }

  if(errorMessageTry != ""){
    inputTry.value=""
    inputTry.placeholder = errorMessageTry
    inputTry.className="errorInput"
  }

  if(errorMessageTry == "" && errorMessageHighestNumber == ""){

    
    $('#screen2').removeClass('hidden')
    $('#screen1').addClass('hidden')
    
    upperLimit=parseInt($('#upperLimit').val())
    
    counter = parseInt($('#counter').val())
    randomNumber = Math.ceil(Math.random()*(upperLimit))
    
    $( "#slider-range" ).slider({
      animate: "slow",
      disabled: true,
      range: true,
      min: 0,
      max: upperLimit,
      values: [ 0, upperLimit],
    });
    
    $('#rangeNumber').empty().append(0 + " und " + upperLimit)
  }
    
})




$('#tryButton').click(function() {

  inputGuessNumber.placeholder = ""
  inputGuessNumber.className=""

  let errorMessageGuess = getErrorMessage(inputGuessNumber,0,1000)

  if(errorMessageGuess != ""){
    inputGuessNumber.value=""
    inputGuessNumber.placeholder = errorMessageGuess
    inputGuessNumber.className="errorInput"
  } else {

    
    if(counter > 0){
      guessNumber = $('#guessNumber').val()
      let value1 = $( "#slider-range" ).slider("values")[0]
      let value2 = $( "#slider-range" ).slider("values")[1]

      if(guessNumber == randomNumber){
        isWon = true
        addDialog()
        modal.showModal()
      } else if(guessNumber<randomNumber){
        value1 = guessNumber
      
      } else {
        value2 = guessNumber
      }
      
      $( "#slider-range" ).slider({
        values: [ value1, value2],  
      })
      
      $('#rangeNumber').empty().append(value1 + " und " + value2)
      
      guessNumber = $('#guessNumber').val("")
      counter--
    } 
    if(counter==0){
      addDialog()
      modal.showModal()
      
    }
    
  }
})

const addDialog = () => {

  $('#modal').empty()
  let html = 
    `<p>${isWon?"Yeah you guessed the right Number!":"Unfortunately you did not guessed the right Number!"}</p>
    <p>The right number is ${randomNumber}</p>
    <div class="button close-button">Restart the Game!</div>`

  $('#modal').append(html)

  $('.close-button').click(function() {
    modal.close()
    $('#screen1').removeClass('hidden')
    $('#screen2').addClass('hidden')
    $('#upperLimit').val("")
    $('#counter').val("")
  })

}






