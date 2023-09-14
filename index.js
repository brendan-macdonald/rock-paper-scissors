const choices = ["Rock", "Paper", "Scissors"]

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeText = document.querySelector('.outcome')
const scoreTrackerText = document.querySelector('.score-tracker')
const gameWinnerText = document.querySelector('.game-winner')


function getComputerChoice() {
    choice = choices[Math.floor(Math.random()*choices.length)];
    return choice
}

let userScore = 0;
let computerScore = 0;


function game() {
    let gameWinner = "";
    outcomeText.textContent = ""
    scoreTrackerText.textContent = "Player Score: " + userScore + " Computer Score: " + computerScore
    
    rockButton.addEventListener('click', function(){
        const computerSelection = getComputerChoice()
        const playerSelection = "Rock"
        playRound(playerSelection, computerSelection)

    })
    
    paperButton.addEventListener('click', function(){
        const computerSelection = getComputerChoice()
        const playerSelection = "Paper"
        playRound(playerSelection, computerSelection)
    })
    
    scissorsButton.addEventListener('click', function(){
        const computerSelection = getComputerChoice()
        const playerSelection = "Scissors"
        playRound(playerSelection, computerSelection)
    })

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            outcomeText.textContent = "Tie! You both chose " + playerSelection
        } else if (playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Scissors" && computerSelection === "Rock" || playerSelection === "Paper" && computerSelection === "Scissors") {
            computerScore++
            outcomeText.textContent = "You lose! " + computerSelection + " beats " + playerSelection
            scoreTrackerText.textContent = "Player Score: " + userScore + " Computer Score: " + computerScore
            
        } else {
            userScore++
            outcomeText.textContent = "You win! " + playerSelection + " beats " + computerSelection
            scoreTrackerText.textContent = "Player Score: " + userScore + " Computer Score: " + computerScore
        }
        endGame()
    }
    

}

function endGame() {

    //determine winner
    if (userScore == 5) {
        gameWinner = "YOU HAVE WON THE GAME!";
        gameWinnerText.textContent = gameWinner;

        //disable game buttons
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;

        // New DOM button to replay
        const playAgainButton = document.createElement("button");
        playAgainButton.className = "play-again-btn"
        playAgainButton.textContent = "Play Again!";
        gameWinnerText.appendChild(playAgainButton);
        //reload page on click
        playAgainButton.addEventListener('click', () => {
            location.reload();
        })
    } else if (computerScore == 5) {
        gameWinner = "COMPUTER WINS...Try Again"
        gameWinnerText.textContent = gameWinner;

        //disable game buttons
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        // New DOM button to replay
        const playAgainButton = document.createElement("button");
        playAgainButton.className = "play-again-btn"
        playAgainButton.textContent = "Play Again!";
        gameWinnerText.appendChild(playAgainButton);
        //reload page on click
        playAgainButton.addEventListener('click', () => {
            location.reload();
        })
    }
}

game()



// function game() {
//     let score = 0
//     console.log("Welcome!")

//     // for (let i = 0; i<5; i++){
//     //     const playerSelection = getPlayerChoice();
//     //     const computerSelection = getComputerChoice();
//     //     console.log(playRound(playerSelection, computerSelection)) 
//     //     score = userScore + " - " + computerScore
//     //     console.log(score)
//     // }
//     if (userScore > computerScore) {
//         return console.log("You have won the game!")
//     } else if (userScore < computerScore) {
//         return console.log("The computer has won the game...")
//     } else {
//         return console.log("The game has ended in a tie.")
//     }
// }

// game()


// function getPlayerChoice() {
//     let input = false
//     while (input == false) {
//         let input = prompt("Choose Rock, Paper, or Scissors...");
//         if (input == null) {
//             continue
//         }
//         inputLower = input.toLowerCase();
//         inputFinal = inputLower.charAt(0).toUpperCase() + inputLower.slice(1);
//         if (choices.includes(inputFinal)){
//             input = true
//             return inputFinal
//         }
//     }
// }


    // function scoreCount() {
    //     if (playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Scissors" && computerSelection === "Rock" || playerSelection === "Paper" && computerSelection === "Scissors") {
    //         computerScore += 1
    //         console.log(computerScore)
    //         console.log(userScore)
    // } else if (playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Paper")
    //         userScore += 1
    //         console.log(computerScore)
    //         console.log(userScore)
    // }
