let compInput;

function getCompInput() {
    let chance = Math.random();
    if (chance < 1 / 3) compInput = 'rock';
    else if (chance < 2 / 3) compInput = 'paper';
    else compInput = 'scissors';
}

const scoreboard = document.querySelector('.scoreboard');
const textLog = document.querySelector('.textLog');
const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', play));

function play() {
    let userInput = this.classList.value;
    getCompInput();
    if (userInput === compInput) textLog.textContent = textLog.textContent + '\nDraw!';
    if ((userInput === 'rock' && compInput === 'scissors') || (userInput === 'paper' && compInput === 'rock') || (userInput === 'scissors' && compInput === 'paper')) {
        textLog.textContent = textLog.textContent + '\nWin!';
        scoreboard.textContent = parseInt(scoreboard.textContent) + 1;
        if (scoreboard.textContent === '5') {
            textLog.textContent = 'Game Over! You have 5 points!';
            scoreboard.textContent = 0;
        }
    }
    if ((userInput === 'rock' && compInput === 'paper') || (userInput === 'paper' && compInput === 'scissors') || (userInput === 'scissors' && compInput === 'rock')) textLog.textContent = textLog.textContent + '\nLose!';;
}



// function reset() {
//     roundCount = 0;
//     winCount = 0;
//     drawCount = 0;
//     lossCount = 0;
//     getComputerInput();
//     getUserInput();
// }