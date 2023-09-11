let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.choice');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    })
});

const playerTally = document.querySelector('#player_score');
const cpuTally = document.querySelector('#computer_score');
const ticker = document.querySelector('#ticker');

function playRound(playerSelection) {
    
    if(playerScore === 5 || computerScore === 5) {
        return;
    }

    function randomChoice() {
        const choices = ['Rock', 'Paper', 'Scissors'];
        return choices[Math.floor(Math.random() * 3)];
    }

let computerSelection = randomChoice();

    if ((playerSelection === 'Rock' && computerSelection === 'Scissors')
        || (playerSelection === 'Paper' && computerSelection === 'Rock')
        || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
    
        ++playerScore;
        playerTally.textContent = playerScore;
        if (playerScore < 5) {
            ticker.textContent = `Point, computer! You chose ${playerSelection} - Computer chose ${computerSelection}.`
        } else if (playerScore === 5) {
            ticker.textContent = 'Victory! - Well played!';
        }
    }
    
    else if (playerSelection === computerSelection) {
        ticker.textContent = `Draw! You chose ${playerSelection} - Computer chose ${computerSelection}.`  
    }
    
    else {
        ++computerScore;
        cpuTally.textContent = computerScore;
        if (computerScore < 5) {
            ticker.textContent = `Point, computer! You chose ${playerSelection} - Computer chose ${computerSelection}.`
        } else if (computerScore === 5) {
            ticker.textContent = 'Defeat! - Maybe next time...';
        }
    }
}