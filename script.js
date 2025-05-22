let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let randomNum = 4
    while (randomNum > 2) {
        randomNum = Math.floor(Math.random()*10);
    }

    console.log(randomNum)
    if(randomNum === 0) {
        return "rock"
    } else if(randomNum === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice () {
    let eleccion = prompt("Input your choice: rock, paper o scissors").toLowerCase();
    return eleccion;
}

function playRound (humanChoice, computerChoice) {
    if(humanChoice === "piedra" && computerChoice === "tijera" ||
        humanChoice === "papel" && computerChoice === "piedra" ||
        humanChoice === "tijera" && computerChoice === "papel"
    ) { 
        return "You win!"
    } else if (humanChoice ===  computerChoice) {
        return "It's a tie!!"
    } else {
        return "Computer wins!"
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let x = playRound(humanSelection, computerSelection);

console.log("Elegiste: ", humanSelection)
console.log("La computadora eligió: ", computerSelection)
console.log(x)