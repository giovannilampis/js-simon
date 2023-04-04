"use strict"

// Visualizzare in pagina 5 numeri casuali. 

// I create a variable corresponding to the amount of 
// random numbers that will appear in the game

const howManyRandomNumbers = 5;

// I create array that will accommodate the random numbers

let randomNumbersContainer = [];

// Da li parte un timer di 30 secondi.

 /* I create a variable which corresponds to the time available 
    to be able to study the random numbers to memorize */

let timeToMemorize = 6;

// Dopo 30 secondi i numeri scompaiono 

// e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone


// I take the button by clicking which the player enters the numbers

const submitNumbers = document.getElementById("submit-numbers");

//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.