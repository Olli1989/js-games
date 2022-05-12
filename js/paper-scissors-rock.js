const rules = document.getElementById('rules')
const rulesDialogOpen = document.getElementById('rulesDialog')
const rulesDialogClose = document.getElementById('rulesDialogClose')

rules.addEventListener('click', ()=>{
    rulesDialog.showModal();
})

rulesDialogClose.addEventListener('click', ()=>{
    rulesDialog.close();
})

/*-------------------------------*/

const myChoice = document.getElementById('myChoice')
const comChoice = document.getElementById('comChoice')
const result = document.getElementById('result')
const resultH2 = document.getElementById('result-h2')
let score = 0;
const scoreOutput = document.getElementById('score')
const myChoiceShadow = document.getElementById('myChoiceShadow')
const comChoiceShadow = document.getElementById('comChoiceShadow')

const choice = (choiceNumber) => {

    let comChoiceRandomNumber = Math.ceil(Math.random()*5)
    let myChoiceCard = getCard(choiceNumber)
    let comChoiceCard = getCard(comChoiceRandomNumber)
    let winner

    screen2.classList.remove('hidden')
    screen1.classList.add('hidden')  

    myChoice.innerHTML = 
        `<div class="card ${myChoiceCard[0]} card-size">
            <div  class="card-content card-content-size ">
                <img src="images/paper-scissors-rock/${myChoiceCard[1]}" alt="">
            </div>
        </div>`

    comChoice.innerHTML = 
        `<div class="card default-card">
             <div class="card-content default-card">
            </div>
        </div>`

    setTimeout(()=> {
        comChoice.innerHTML = 
            `<div class="card ${comChoiceCard[0]} card-size">
                 <div class="card-content card-content-size ">
                     <img src="images/paper-scissors-rock/${comChoiceCard[1]}" alt="">
                </div>
            </div>`
        
        winner = checkWinner(choiceNumber, comChoiceRandomNumber);
        result.classList.remove('hidden')
        if(winner==1){
            myChoice.classList.add('winner-shadow')
            resultH2.innerHTML = "YOU WON"
            score++
            scoreOutput.innerHTML = score
        } else if(winner == -1){
            comChoice.classList.add('winner-shadow')
            resultH2.innerHTML = "YOU LOSE"
        } else {
            resultH2.innerHTML = "DRAW"
        }
    },500)
}

const checkWinner = (choiceNumber, comChoiceRandomNumber) => {

    if((choiceNumber==5 && comChoiceRandomNumber == 1)||(choiceNumber+1 == comChoiceRandomNumber)){
        return 1
    } else if((comChoiceRandomNumber==5 && choiceNumber == 1)||(comChoiceRandomNumber+1 == choiceNumber)){
        return -1
    } else {
        return 0
    }
}

const getCard = (choiceNumber) => {
    let imgName, borderColor

    switch(choiceNumber){
        case 1:
            borderColor = "bc-scissors"
            imgName = "icon-scissors.svg"
            break;
        case 2:
            borderColor = "bc-paper"
            imgName = "icon-paper.svg"
            break;
        case 3:
            borderColor = "bc-rock"
            imgName = "icon-rock.svg"
            break;
        case 4:
            borderColor = "bc-lizard"
            imgName = "icon-lizard.svg"
            break;
        case 5:
            borderColor = "bc-spock"
            imgName = "icon-spock.svg"
            break;
    }

    return [borderColor,imgName]
}

const startGame = () => {
    result.classList.add('hidden')
    screen1.classList.remove('hidden')
    screen2.classList.add('hidden')
    myChoice.classList.remove('winner-shadow')
    comChoice.classList.remove('winner-shadow')
}