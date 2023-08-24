//Computer makes random choice

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerSelection = choices[Math.floor(Math.random() * 3)];

    return computerSelection;
}

//Player prompted for choice

function getPlayerChoice() {
    const playerSelection = prompt('Choose Rock, Paper, or Scissors:',);

    return playerSelection.charAt(0).toUpperCase()
        + playerSelection.slice(1).toLowerCase();
}

//Player vs. computer compared to declare winner

function playRound(playerSelection, computerSelection) {

    if ((playerSelection === 'Rock' && computerSelection === 'Scissors')
        || (playerSelection === 'Paper' && computerSelection === 'Rock')
        || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {

        return 'You win!'
    }

    else if (playerSelection === computerSelection) {
        
        return 'It\'s a tie - clash again!'
    }

    else {
        
        return 'You lose.'
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(`You chose ${playerSelection}.`);
console.log(`Computer chose ${computerSelection}.`);
console.log(playRound(playerSelection, computerSelection));