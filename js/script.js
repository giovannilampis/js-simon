"use strict"

// I create a variable corresponding to the amount of 
// random numbers that will appear in the game

const howManyRandomNumbers = 5;

// I create array that will accommodate the random numbers

let randomNumbersContainer = [];

 /* I create a variable which corresponds to the time available 
    to be able to study the random numbers to memorize */

let timeToMemorize = 6;

// I get the input elements in which the player visualizes and enters the numbers

const inputCell = document.getElementsByTagName('input');

// I take the button by clicking which the player enters the numbers

const submitNumbers = document.getElementById("submit-numbers");



function playGame() {

    let lista = document.getElementById("lista");

    // the amount of created number must match howManyNumbers

    while( randomNumbersContainer.length < howManyRandomNumbers ) {

        // declare the variable corresponding to the randomly created number

        let randomNumber = createRandomNumber(1, 100);

        // if not already present, the extracted number is pushed into the array containing the extracted numbers

        if( !randomNumbersContainer.includes( randomNumber ) ) {

            randomNumbersContainer.push(randomNumber);

            
        }

    }

}

// ADD EVENT LISTENER

submitNumbers.addEventListener("click", function() {
    playGame();
    console.log(playGame())
})


// this function will be called to generate random numbers between a maximum and a minimum

function createRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};