"use strict"

// create a variable corresponding to the amount of 
// random numbers that will appear in the game

const howManyRandomNumbers = 5;

// I create array that will accommodate the random numbers

let randomNumbersContainer = [];

 /* I create a variable which corresponds to the time available 
    to be able to study the random numbers to memorize */

let timeToMemorize = 6;

// create a variable that expresses the numbers written by user during the game

const userNumbers = [];

// get the input elements in which the player visualizes and enters the numbers

const inputCells = document.getElementsByTagName('input');

// get the button by clicking which the player enters the numbers

const submitNumbers = document.getElementById("submit-numbers");

// a variable expresses the right answers of the userbduring the game

const guessedNumbers = [];

// get the alert classed div in html (game response)

const alertHtml = document.querySelector(".alert");

// add setTimeout to make random numbers disappear at some point

const timer = setTimeout( resetAll, timeToMemorize * 1000 )



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

// a function will make disappear the random numbers

const resetAll() {

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