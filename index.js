options = ["rock","paper","scissors"]

// funtion for random values by the computer 

function computerPlay(){
  let randomValue = Math.floor(Math.random()*3)
  return options[randomValue]
}


// funtion for firstround of the game 
function playRound(compterSelection,playerSelection){
  
  if (playerSelection===computerSelection){
    return "its a tie " 
  }
  else if (playerSelection==="rock" && computerSelection==="paper"){
    return "paper loses to rock , the computer wins" 
  }
  else if (playerSelection==="rock" && computerSelection==="scissors"){
    return "sci loses to rock" 
  }
  else if (playerSelection==="rock" && computerSelection==="paper"){
    return "rock loses to paper" 
  }
  

  else if (playerSelection==="paper" && computerSelection==="scissors"){
    return "paper loses to sci" 
  }
  else if (playerSelection==="paper" && computerSelection==="rock"){
    return "rock loses to paper" 
  }
  else if (playerSelection==="scissors" && computerSelection==="rock"){
    return "sci lose to rock" 
  }
  else if (playerSelection==="scissors" && computerSelection==="paper"){
    return "paper loses to sci " 
  }
  else{
    return "darn maybe you made a mistake with the spellings , try again"
  }
}


let computerSelection = computerPlay()
const playerChoice = prompt("choose one of the three : rock , paper or scissors")
let playerSelection = playerChoice.toLowerCase()
console.log(playRound(computerSelection,playerSelection))