let startGame = document.getElementById('start')
let buttonTry = document.getElementById('btn-try')
let gameUrl = document.getElementById('game-screen')

let restart = document.getElementsByClassName('restart')

let inputTry = document.getElementById('try')
let fallingSpeed = document.getElementById('planet').value
let inputForce = document.getElementById('force')
let inputAngle = document.getElementById('angel')

let throwingDistance
let distanceToMonster = Math.round(Math.random() * 90 + 10)
let inputforceCalc
let inputangleCalc
let inputTryValue

let resultArr=[]

document.body.style.backgroundImage="url(images/earth.jpg)"
document.body.style.backgroundRepeat="no-repeat"
document.body.style.backgroundSize="cover"

startGame.addEventListener('click', ()=> {
    let inputTryVal = document.getElementById('try').value

    if(inputTryVal > 0 || inputTry<=50){
        isGameStarted= true
        document.getElementById('choose').style.display="none"
        document.getElementById('gameOption').style.display="block"
        distanceMonster.innerText = distanceToMonster
        inputTryValue = inputTry.value
        buttonTry.innerText = "Versuch"
    } else {
        inputTry.value=""
        inputTry.className="errorInput"
        inputTry.placeholder="Enter your tries"
    }

})


buttonTry.addEventListener('click', ()=> {


    let errorAngel = getErrorMessage(inputAngle,0,90)
    let errorForce = getErrorMessage(inputForce,0,1000)
    if(errorAngel != ""){
        inputAngle.value=""
        inputAngle.placeholder = errorAngel
        inputAngle.className="errorInput"
    }

    if(errorForce != ""){
        inputForce.value=""
        inputForce.placeholder=errorForce
        inputForce.className="errorInput"
    }
   

    if(errorAngel == "" && errorForce == "") {
        inputforceCalc = document.getElementById('force').value
        inputangleCalc = document.getElementById('angel').value * ( Math.PI / 180 )

        inputTryValue--
        
        throwingDistance =  ((inputforceCalc * inputforceCalc) * Math.sin(2 * inputangleCalc)) / fallingSpeed
        
        if(throwingDistance<distanceToMonster || throwingDistance>distanceToMonster){
            resultArr.push(Math.abs(distanceToMonster-throwingDistance))
            printResult()
        } else {
            wonDialog.showModal();
        }

        if(inputTryValue == 0){

            lostDialog.showModal()
        }
        
    } 
    
})

const printResult = () => {
    let resultDiv = document.getElementById('result')
    let html =""
    html += '<div class="card-container">'
    resultArr.forEach((ele,i)=> {
        html+=`<div class="card"><p>Versuchnr. ${i+1}</p><p>Entfernung ${ele.toFixed(2)}m</p></div>`
    })
    html+= '</div>'

    resultDiv.innerHTML = html
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
