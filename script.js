let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let randomNum = 4
    while (randomNum > 2) {
        randomNum = Math.floor(Math.random()*10);
    }

    console.log(randomNum)
    if(randomNum === 0) {
        return "Rock"
    } else if(randomNum === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice () {
    let eleccion = prompt("Ingresar su elección: Piedra, papel o tijera").toLowerCase();
    return eleccion;
}

let x = getHumanChoice()
console.log(x)