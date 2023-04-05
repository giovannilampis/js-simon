"use strict"

// MAIN FUNCTIONS I AM GOING TO NEED

// 1 - Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. ---- const initialization()

// 2 - Dopo 30 secondi i numeri scompaiono ---- resetAll()

// 3 - e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite delle casella di input ed un bottone ---- handleClick()

// 4 - Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati ---- showResult();


let randomNumbersContainer = [];

// create a variable that expresses the numbers written by user during the game

const userNumbers = [];

// get the input elements in which the player visualizes and enters the numbers

const inputCells = document.getElementsByTagName('input');

// get the button by clicking which the player enters the numbers

const submitNumbers = document.getElementById("submit-numbers");


// ADD EVENT LISTENER

submitNumbers.addEventListener("click", handleClick );


// initialization

function initialization() {

    // a variable corresponds to the time available to study the random numbers to memorize //

    let timeToMemorize = 6;

    const min = 1;

    const max = 100;

    let counter = 0;

    while(randomNumbersContainer.length < 5) {

        // declare the variable corresponding to the randomly created number

        const randomNumber = createRandomNumber(min, max);

        // if not already present, the random number is pushed into the array containing the extracted numbers

        if( !randomNumbersContainer.includes( randomNumber ) ) {

            randomNumbersContainer.push(randomNumber);

            // randomNumber will be printed in HTML

            inputCells[counter].value = randomNumber;

            // counter value increases by one

            counter++;

        }

    }

    // console.log(randomNumbersContainer);

    // add setTimeout to make random numbers disappear at some point

    const timer = setTimeout( resetAll, timeToMemorize * 1000 );

}

// init the initialization function

initialization();


// a function named resetAll ...

function resetAll() {

    for(let i = 0; i < inputCells.length; i++) {

        // ... will make disappear the random numbers ...

        inputCells[i].value = "";

        // ... will delete the the read-only property from input elements

        inputCells[i].toggleAttribute('readonly');

    }

    // and will make the #submit-numbers button appear in html

    submitNumbers.className = "d-block";

 }

function handleClick() {

    for(let i = 0; i < inputCells.length; i++) {

        // variable corresponding to the number entered by the user

        let userNum = parseInt( inputCells[i].value );

        // if it doesn't already exist in the array userNumbers, ...

        if(!userNumbers.includes(userNum)) {

            // ... push userNum in the array userNumbers

            userNumbers.push(userNum);

        }

    }

    showResult();
}


// a function will do a comparison between the two Arrays: randomNumbersContainer and userNumbers
// the result of this comparison will be shown in HTML

function showResult() {

    // a variable expresses the right answers of the user during the game

    const guessedNumbers = [];

    // get the alert classed div in html (game response)

    const alertHtml = document.getElementById("alert");

    for (let i = 0; i < userNumbers.length; i++) {

        if( randomNumbersContainer.includes(userNumbers[i]) ) {

            guessedNumbers.push(userNumbers[i]);

        }

    }

    console.log(guessedNumbers);

    alertHtml.innerHTML = `I numeri che hai ricordato correttamente sono: ${guessedNumbers}`;

    alertHtml.className = "d-block";

}


// this function will be called to generate random numbers between a maximum and a minimum

function createRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};