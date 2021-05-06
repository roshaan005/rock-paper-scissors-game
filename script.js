
options = ["rock","paper","scissors"]




// funtion for random values by the computer 

function computerPlay(){
  let randomValue = Math.floor(Math.random()*3)
  return options[randomValue]
}

let computerSelection = computerPlay() 


let section = document.getElementById("container")
let textBar = document.getElementById("text")
let points = document.getElementById("points")
let sec = section.firstElementChild;
console.log(sec)



section.addEventListener("click",playRound)


let playerPoints = 0  ;
let computerPoints = 0 ;


function playRound(e){


    let computerSelection = computerPlay() 

    
    if((e.target.className == computerSelection)){
        textBar.textContent = `the computer also  chose ${computerSelection} , its a tie`
    }
    else if((e.target.classList.contains("rock")) && (computerSelection === "paper")){
        computerPoints+=1
        
        textBar.textContent = `the computer chose ${computerSelection}, you losst this round:(`

    }

    else if((e.target.classList.contains("rock")) && (computerSelection === "scissors")){
        playerPoints+=1
        textBar.textContent =  `the computer chose ${computerSelection} , you won this one buddy!`
        
    }
    else if((e.target.classList.contains("paper")) && (computerSelection === "scissors")){
        computerPoints+=1
        textBar.textContent =  `the computer chose ${computerSelection} , you lost this round darnnnn`
        
    }
    else if((e.target.classList.contains("paper")) && (computerSelection === "rock")){
        playerPoints+=1

        textBar.textContent =  `the computer chose ${computerSelection} , you won yepeeeee`
        
    }
    else if((e.target.classList.contains("scissors")) && (computerSelection === "rock")){
        computerPoints+=1
    
        textBar.textContent =  `the computer chose ${computerSelection} , ooof you lost this won`
       
    }
    else if((e.target.classList.contains("scissors")) && (computerSelection === "paper")){
        playerPoints+=1
        textBar.textContent =  `the computer chose ${computerSelection} , you won  yayyy`
        
    }
    points.textContent = `your score is ${playerPoints} and the computer's score is  ${computerPoints}`
    let sec = section.firstElementChild;
   
    


    if(playerPoints===5){
        section.textContent= "YOU WON THE GAME!"
       
        textBar.textContent = "you were able to score five points and hence you are the CHAMPIONN"
        sec.style.display = "hidden"
    

    }
    if(computerPoints===5){
        section.innerHTML= "<p>THE COMPUTER WON THE GAME :(<p>"
       textBar.textContent = "the computer scored five points before you :/ but you are still amazing "
       sec.style.display = "none";
    
       
    
    }

}

let btn = document.getElementById("btn")

btn.addEventListener("click",tryAgain)
function tryAgain(){
    

    document.location.reload();


}

    
    
