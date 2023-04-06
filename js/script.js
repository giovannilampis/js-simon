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

let inputCells = document.getElementsByTagName('input');

// get the button by clicking which the player enters the numbers

const submitNumbers = document.getElementById("submit-numbers");

// get the button that will make it possible to start a new game

const newGame = document.getElementById("new-game");

let guessedNumbers;


// ADD EVENT LISTENER TO SUBMIT NUMBERS

submitNumbers.addEventListener("click", handleClick );

// ADD EVENT LISTENER TO START A NEW GAME

newGame.addEventListener( "click", playAgain ); 


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

    // add setTimeout to make random numbers disappear at some point

    const timer = setTimeout( resetAll, timeToMemorize * 1000 );

}

// init the initialization function

initialization();


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

    // the button #submit-numbers disappears

    submitNumbers.className = "d-none";

    // the button #new-game appears

    newGame.className = "d-block";

    // call function showResult

    showResult();
}


// a function will do a comparison between the two Arrays: randomNumbersContainer and userNumbers
// the result of this comparison will be shown in HTML

function showResult() {

    // a variable expresses the right answers of the user during the game

    guessedNumbers = [];

    // get the alert classed div in html (game response)

    const alertHtml = document.getElementById("alert");

    // thanks to a cycle, push into guessedNumbers the numbers the user was able to remember

    for (let i = 0; i < userNumbers.length; i++) {

        if( randomNumbersContainer.includes(userNumbers[i]) ) {

            guessedNumbers.push(userNumbers[i]);

        }

    }

    if (guessedNumbers.length == 0) {

        alertHtml.innerHTML = `you must certainly improve your memory: you have not remembered any number 👎`;

    } else if (guessedNumbers.length == 5) {

        alertHtml.innerHTML = `you have an amazing memory: you remembered all the numbers 😻`

    } else { alertHtml.innerHTML = `the numbers you remembered correctly are ✌️: ${guessedNumbers}`}

    alertHtml.className = "d-block";

}


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

//  a function allows us to play again

 function playAgain() {

       // the #new-game button is not visible anymore
    
        newGame.className = "d-none";
    
        // empty the input boxes where the user had entered the numbers
    
        resetAll();
    
        // get the alert classed div in html (game response)
        const alertHtml = document.getElementById("alert");
    
        // the result of the just finished game disappears
    
        alertHtml.innerHTML = "";
    
        randomNumbersContainer.length = 0
    
        userNumbers.length = 0
    
        guessedNumbers.length = 0
    
        initialization();
    
    }



// this function will be called to generate random numbers between a maximum and a minimum

function createRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1) ) + min;

};