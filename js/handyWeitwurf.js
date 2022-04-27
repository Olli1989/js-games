let startGame = document.getElementById('start')
let buttonTry = document.getElementById('btn-try')
let gameUrl = document.getElementById('game-screen')

let inputTry = document.getElementById('try').value
let fallingSpeed = document.getElementById('planet').value
let inputforce = document.getElementById('force').value
let inputangel = document.getElementById('angel').value
let throwingDistance
let distanceToMonster = Math.round(Math.random() * 90 + 10)

console.log(gameUrl)

document.body.style.backgroundImage="url(images/earth.jpg)"

startGame.addEventListener('click', ()=> {
    inputTry = document.getElementById('try').value
    console.log(inputTry)
    if(inputTry.value == ""){
        inputTry.className="errorInput"
        inputTry.placeholder="Enter your tries"
    } else {
        isGameStarted= true
        document.getElementById('choose').style.display="none"
        document.getElementById('gameOption').style.display="block"
        distanceMonster.innerText = distanceToMonster
        buttonTry.innerText = "Versuch"
    }
})


buttonTry.addEventListener('click', ()=> {
    /*let errorAngel = getErrorMessage(inputAngle,0,90)
    let errorForce = getErrorMessage(inputForce,0,90)
    if(errorAngel != ""){
        console.log("check")
        span = document.createElement('span')
        console.log(span)
        span.innerHTML=""
        span.classList.add('error')
        span.append(errorAngel)
        inputAngle.after(span)
    }

    if(errorForce != ""){
        span = document.createElement('span')
        span.classList.add('error')
        span.append(errorForce)
        inputForce.after(span)
    }*/


    inputforce = document.getElementById('force').value
    inputangel = document.getElementById('angel').value * ( Math.PI / 180 )

    
    if(buttonTry.innerHTML == "Versuch") {
        
        
        throwingDistance =  ((inputforce * inputforce) * Math.sin(2 * inputangel)) / fallingSpeed
        console.log(throwingDistance)
        if(throwingDistance<distanceToMonster){
            console.log("almost <")
        } else if(throwingDistance>distanceToMonster){
            console.log("almost >")
        } else {
            console.log("congratulation")
        }
        
        inputTry--

    } else if (buttonTry.innerHTML == "New Game") {
        document.getElementById('gameOption').style.display="none"
        document.getElementById('choose').style.display="block"

    }
    
    console.log(inputTry)
    buttonTry.innerHTML = inputTry>0 ? "Versuch" : "New Game"

            
        

    

})



const getErrorMessage = (input ,min=0, max=100) => {
    if(input.value == ""){
        return "Enter a value"
    } else if(!parseFloat(inputAngle.value)){
        return "Enter a number"
    } else if(input.value <= min || input.value >= max){
        return `Enter a number between ${min} and ${max}`
    }
    return ""
}

const gameScreen = document.getElementById('game-screen')

const changeUrl = () => {
    fallingSpeed = document.getElementById('planet').value
    if(fallingSpeed == 9.81){
        document.body.style.backgroundImage="url(images/earth.jpg)"
    } else if (fallingSpeed == 1.62){
        document.body.style.backgroundImage="url(images/mond.jpg)"
    } else if (fallingSpeed == 3.69){
        document.body.style.backgroundImage="url(images/mars.jpg)"
    } else if (fallingSpeed == 24.79){
        document.body.style.backgroundImage="url(images/jupiter.jpg)"
    }

    gameUrl.style.background="images/earth.jpg"
  
}
