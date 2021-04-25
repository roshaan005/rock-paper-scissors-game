options = ["rock","paper","scissors"]

// funtion for random values by the computer 

function computerPlay(){
  let randomValue = Math.floor(Math.random()*3)
  return options[randomValue]
}

// initialized points (0) for both the parties 
let playerPoints = 0;
let computerPoints = 0;

// funtion for conditions in the game
function playRound(computerSelection,playerSelection){
  if (playerSelection===computerSelection){
    alert("ummmm this is a tie , both the players chose the same weapon")
    return "ummmm this is a tie , both the players chose the same weapon"
  
  }
  else if (playerSelection==="rock" && computerSelection==="paper"){
    computerPoints+=1
    alert("the computer chose paper , rock loses to paper , darnn you lost this round")
    return "the computer chose paper , rock loses to paper , darnn you lost this round" 
    
  }
  else if (playerSelection==="rock" && computerSelection==="scissors"){
    playerPoints+=1
    alert("the computer chose scissors , scissors lose to rock , hehe you won this round wohooo")
    return "the computer chose scissors , scissors lose to rock , hehe you won this round wohooo" 
   
  }
  else if (playerSelection==="paper" && computerSelection==="scissors"){
    computerPoints+=1
    alert("the computer chose scissors, paper loses to scissors, darnn you lost this round")
    return "the computer chose scissors, paper loses to scissors, darnn you lost this round" 
  }
  else if (playerSelection==="paper" && computerSelection==="rock"){
    playerPoints+=1
    alert("the computer chose rock, rock loses to paper, hehe you won this round weeee")
    return "the computer chose rock, rock loses to paper, hehe you won this round weeee" 
  }
  else if (playerSelection==="scissors" && computerSelection==="rock"){
    computerPoints+=1
    alert("the computer chose rock, scissors lose to rock, darn you lost this round")
    return "the computer chose rock, scissors lose to rock, darn you lost this round" 
  }
  else if (playerSelection==="scissors" && computerSelection==="paper"){
    playerPoints+=1
    alert("the computer chose paper, paper loses to scissors, YOU WON IT MATE")
    return "pthe computer chose paper, paper loses to scissors, YOU WON IT MATE" 
  }
  else{
    return "darn maybe you made a mistake with the spellings , try again"
  }
}



// function for the game play 
function game(){
  let computerSelection = computerPlay()
  const playerChoice = prompt("choose one of the three : rock , paper or scissors")
  let playerSelection = playerChoice.toLowerCase()
  console.log(playRound(computerSelection,playerSelection))
}

// loop for five rounds nested in a while loop with the playagain option
let play = true;
while (play = true){
  for (i = 0; i < 5; i++){
    game();
  }
  // winner function 
  winner(computerPoints,playerPoints)
  let playAgain= prompt("do u wanna play again (yes or yes?) jk : y/n");
  if (playAgain.toLowerCase=='y'){
    play = true;
  }
  else{
    break;
  }
}
// winner calculator function
function winner(computerPoints,playerPoints){
  if (computerPoints>playerPoints){
    alert("the computer defeated you lill hooman bean")
  }
  else if (playerPoints>computerPoints){
    alert("AND you have defeated the mighty computer , have some candy :3")
  }
  else if (playerPoints === computerPoints){
    alert("both the players were too good so this match was tied , you can try again buddy to defeat the mighty computer")
  }
}

