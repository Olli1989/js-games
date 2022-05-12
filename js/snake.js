const boardEl = document.querySelector(".board")
const gameStartReset = document.querySelector("#start-reset-btn")
const scoreEl = document.querySelector("#score")
const leaderboardDiv = document.getElementById('leaderboard')
let squares = []
let snake = [2, 1, 0]
let direction = 1
let startGame = true
let intervalId = 0
let countdownId=0
let countdown = 3
let score = 0
let randomNumber = 0
let speed = 0.5

let leaderboard  =JSON.parse(localStorage.getItem("leaderboard"))
if(!leaderboard){
  localStorage.setItem("leaderboard", JSON.stringify([0,0,0,0,0]))
}


const printScoreboard = () => {

  leaderboard = JSON.parse(localStorage.getItem("leaderboard"))
  
  let html = "<h2>Leaderboard</h2>"
  leaderboard.forEach((ele,i)=>{
    html+= `<p>Nr.${i+1} <span class="highlight">${ele}</span> Punkte</p>`
  })

  leaderboardDiv.innerHTML = html
  
}

printScoreboard()

createBoard()
snake.forEach(e => {
  squares[e].classList.add("snake")
})
document.addEventListener("keydown", control)

createApple()


gameStartReset.addEventListener("click", () => {
  if (startGame) {
    //Countdown until the start of the game
    document.querySelector("#countdown").textContent = countdown
    countdownId = setInterval(() => {
      if (countdown === 0) {
        
        clearInterval(countdownId)
        intervalId = setInterval(move, 500)
        gameStartReset.textContent = "Reset"
        document.querySelector("#countdown").textContent = ""
      } else {
        document.querySelector("#countdown").textContent = countdown
        countdown--
      }
    }, 1000)
    
  } else {
    
    clearInterval(intervalId)

    snake.forEach(index => squares[index].classList.remove("snake"))
    snake = [2, 1, 0]
    direction = 1
    countdown=3
    
    score = 0
    scoreEl.textContent = score
    snake.forEach(e => {
      squares[e].classList.add("snake")
    })
    gameStartReset.textContent = "Start"
  }
  startGame = !startGame
})

function move() {
  if ((snake[0] < 10 && direction == -10) ||
    (snake[0] % 10 === 9 && direction == 1) ||
    (snake[0] % 10 === 0 && direction == - 1) ||
    (snake[0] > 90 && direction === 10) ||
    (squares[snake[0] + direction].classList.contains("snake"))
  ) {
    gameStartReset.textContent = "Reset"

    leaderboard.push(score)
    leaderboard.sort().reverse()
    if(leaderboard.length>5){
      leaderboard.pop()
    }
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard))
    
    printScoreboard()
    return clearInterval(intervalId)
  }

  snake.unshift(snake[0] + direction)
  squares[snake[0]].classList.add("snake")
  const lastSnakeElement = snake.pop()
  squares[lastSnakeElement].classList.remove("snake")

  if (squares[snake[0]].classList.contains("apple")) {
    snake.push(lastSnakeElement)
    squares[lastSnakeElement].classList.add("snake")
    squares[snake[0]].classList.remove("apple")
    score++
    scoreEl.textContent = score
    clearInterval(intervalId)
    intervalId = setInterval(move, 500 * speed)
    createApple()
  }


}

function control(e) {
  if (e.keyCode === 39) {
    direction = 1
  } else if (e.keyCode === 38) {
    direction = -10
  } else if (e.keyCode === 37) {
    direction = -1
  } else if (e.keyCode === 40) {
    direction = 10
  }
}

function createBoard() {
  for (let i = 1; i <= 100; i++) {
    const divEl = document.createElement("div")
    divEl.classList.add("square")
    boardEl.appendChild(divEl)
    squares.push(divEl)
  }
}

function createApple() {
  do {
    randomNumber = Math.floor(Math.random() * 100)
  } while (squares[randomNumber].classList.contains("snake"))
  squares[randomNumber].classList.add("apple")
}

