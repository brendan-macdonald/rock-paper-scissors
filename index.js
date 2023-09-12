const choices = ["Rock", "Paper", "Scissors"]


function getComputerChoice() {
    choice = choices[Math.floor(Math.random()*choices.length)];
    return choice
}

function getPlayerChoice() {
    let input = false
    while (input == false) {
        let input = prompt("Choose Rock, Paper, or Scissors...");
        if (input == null) {
            continue
        }
        inputLower = input.toLowerCase();
        inputFinal = inputLower.charAt(0).toUpperCase() + inputLower.slice(1);
        if (choices.includes(inputFinal)){
            input = true
            return inputFinal
        }
    }
}

//Previously used getPlayerChoice() function without the ability to restrict null/non array answers
// function getPlayerChoice() {
//     let input = prompt("Choose Rock, Paper, or Scissors...");
//     while (input == null) {
//         input = prompt("Choose Rock, Paper, or Scissors...");
//     }
//     inputLower = input.toLowerCase();
//     inputFinal = inputLower.charAt(0).toUpperCase() + inputLower.slice(1);
//     return inputFinal
// }


let userScore = 0
let computerScore = 0


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!"

    } else if (playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Scissors" && computerSelection === "Rock" || playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore += 1
        return "You lose! " + computerSelection + " beats " + playerSelection 
    } else {
        userScore += 1
        return "You win! " + playerSelection + " beats " + computerSelection
    }
}


function game() {
    let score = 0
    console.log("Welcome!")

    for (let i = 0; i<5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection)) 
        // console.log(userScore)
        // console.log(computerScore)
        score = userScore + " - " + computerScore
        console.log(score)
    }
    if (userScore > computerScore) {
        return console.log("You have won the game!")
    } else if (userScore < computerScore) {
        return console.log("The computer has won the game...")
    } else {
        return console.log("The game has ended in a tie.")
    }
}

game()


