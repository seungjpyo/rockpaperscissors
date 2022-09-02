let compInput;

function getCompInput() {
    let chance = Math.random();
    if (chance < 1 / 3) compInput = 'rock';
    else if (chance < 2 / 3) compInput = 'paper';
    else compInput = 'scissors';
}

const scoreboard = document.querySelector('.scoreboard');
const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', play));

function play() {
    let userInput = this.classList.value;
    getCompInput();
    if (userInput === compInput) console.log('Draw!');
    if ((userInput === 'rock' && compInput === 'scissors') || (userInput === 'paper' && compInput === 'rock') || (userInput === 'scissors' && compInput === 'paper')) {
        console.log('Win!');
        scoreboard.textContent = parseInt(scoreboard.textContent) + 1;
        if (scoreboard.textContent === '5') alert('Game Over!');
    }
    if ((userInput === 'rock' && compInput === 'paper') || (userInput === 'paper' && compInput === 'scissors') || (userInput === 'scissors' && compInput === 'rock')) console.log('Lose!');
}



// function reset() {
//     roundCount = 0;
//     winCount = 0;
//     drawCount = 0;
//     lossCount = 0;
//     getComputerInput();
//     getUserInput();
// }