options = ["rock","paper","scissors"]

// funtion for random values by the computer 

function computerPlay(){
  let randomValue = Math.floor(Math.random()*3)
  return options[randomValue]
}
let playerPoints = 0;
let computerPoints = 0;

// funtion for firstround of the game 
function playRound(computerSelection,playerSelection){
  if (playerSelection===computerSelection){
    alert("n")
    playerPoints+=1
    computerPoints+=1
    return "its a tie " 
  }
  else if (playerSelection==="rock" && computerSelection==="paper"){
    computerPoints+=1
    alert("n")
    return "paper loses to rock , the computer wins" 
    
  }
  else if (playerSelection==="rock" && computerSelection==="scissors"){
    playerPoints+=1
    alert("n")
    return "sci loses to rock" 
   
  }
  else if (playerSelection==="rock" && computerSelection==="paper"){
    computerPoints+=1
    alert("n")
    return "rock loses to paper" 
  }
  else if (playerSelection==="paper" && computerSelection==="scissors"){
    computerPoints+=1
    alert("n")
    return "paper loses to sci" 
  }
  else if (playerSelection==="paper" && computerSelection==="rock"){
    playerPoints+=1
    alert("n")
    return "rock loses to paper" 
  }
  else if (playerSelection==="scissors" && computerSelection==="rock"){
    computerPoints+=1
    alert("n")
    return "sci lose to rock" 
  }
  else if (playerSelection==="scissors" && computerSelection==="paper"){
    playerPoints+=1
    alert("n")
    return "paper loses to sci " 
  }
  else{
    return "darn maybe you made a mistake with the spellings , try again"
  }
}
function game(){
  let computerSelection = computerPlay()
  const playerChoice = prompt("choose one of the three : rock , paper or scissors")
  let playerSelection = playerChoice.toLowerCase()
  console.log(playRound(computerSelection,playerSelection))
}

function winner(computerPoints,playerPoints){
  if (computerPoints>playerPoints){
    alert("computer won")
  }
  else if (playerPoints>computerPoints){
    alert("player won")
  }
  else{
    alert("its a tie")
  }
}

let play = true;
while (play = true){
  for (i = 0; i < 5; i++){
    game();
  }
  winner()
  let playAgain= prompt("do u wanna play again Y/n");
  if (playAgain=='y'){
    play = true;
  }
  else{
    play = false;
  }


}


  
