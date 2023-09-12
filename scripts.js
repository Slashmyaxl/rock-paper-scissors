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
const commentary = document.querySelector('#instruction');
const tickerContainer = document.querySelector('#ticker-container');
const ticker = document.createElement('p');
    tickerContainer.appendChild(ticker);

function playRound(playerSelection) {

    if (playerScore === 5 || computerScore ===5) {
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
    
        playerScore++;
        playerTally.textContent = playerScore;
        if (playerScore < 5) {
            commentary.textContent = `Point, computer! You chose ${playerSelection} - Computer chose ${computerSelection}.`
        } 
        
        if (playerScore === 4) {
            ticker.style.color = 'hsl(150, 95%, 55%)';
            ticker.textContent = 'Almost...'
        } else if (playerScore === 5) {
            ticker.style.color = 'hsl(150, 95%, 55%)';
            ticker.textContent = 'VICTORY!';
        }
    }
    
    else if (playerSelection === computerSelection) {
        commentary.textContent = `Draw! You chose ${playerSelection} - Computer chose ${computerSelection}.`  
    }
    
    else {
        computerScore++;
        cpuTally.textContent = computerScore;
        if (computerScore < 5) {
            commentary.textContent = `Point, computer! You chose ${playerSelection} - Computer chose ${computerSelection}.`
        }
        
        if (computerScore === 4) {
            ticker.style.color = 'hsl(70, 90%, 60%)';
            ticker.textContent = 'Don\'t give up...'
        } else if (computerScore === 5) {
            ticker.style.color = 'hsl(355, 90%, 60%)'
            ticker.textContent = 'DEFEAT!';
        }
    }
}