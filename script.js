"use strict";

let computerInput;
let userInput;
let roundCount = 0;
let winCount = 0;
let drawCount = 0;
let lossCount = 0;
//Note to self:
//Remember to set initial values to these number variables in order to use ++ or -- operator
//Otherwise will throw an error

getComputerInput();
getUserInput();


/*
function runComputerInput() {
    let randomNumber = Math.random();
    computerInput = randomNumber < 2/3 ? (randomNumber < 1/3 ? 'ROCK' : 'PAPER') : 'SCISSORS';
}

 Here above, I practiced using nested ternary operators to assign the values of
 'ROCK', 'PAPER', and 'SCISSORS' to my variable at a 1/3 probability each.
This works fine but I rewrote this function using if...else for more practice
*/



function getComputerInput() {
    let randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        computerInput = 'ROCK'
    } else if (randomNumber < 2 / 3) {
        computerInput = 'PAPER'
    } else {
        computerInput = 'SCISSORS'
    }
}


//recursive function declaration
function getUserInput() {
    userInput = prompt('Rock, Paper, Scissors?',);
    if (userInput === null) {
        alert('You canceled. Try again!');
        getUserInput();
    } else {
        userInput = userInput.toUpperCase();
        if (userInput !== 'ROCK' && userInput !== 'PAPER' && userInput !== 'SCISSORS') {
            alert('Wrong input! Try again!');
            getUserInput();
        } else evaluate();
    }
}


function evaluate() {
    if (userInput === computerInput) {
        alert('Draw!');
        ++drawCount;
    } else if ((userInput === 'ROCK' && computerInput === 'SCISSORS') || (userInput === 'PAPER' && computerInput === 'ROCK') || (userInput === 'SCISSORS' && computerInput === 'PAPER')) {
        alert('Win!');
        ++winCount;
    } else {
        alert('Lose!');
        ++lossCount;
    }
    ++roundCount;
    if (roundCount <5) {
        getComputerInput();
        getUserInput();
    } else {
        alert(`You played 5 rounds! You have ${winCount} wins, ${drawCount} draws, and ${lossCount} losses.`)
        confirm('Do you want to play again?') ? reset() : alert('Thank you for playing! Bye!')
    }
}//Note to self: confirm() will return boolean values
//And ternary operator evaluates boolean values

function reset() {
    roundCount = 0;
    winCount = 0;
    drawCount = 0;
    lossCount = 0;
    getComputerInput();
    getUserInput();
}
