/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function estraiIniziali(arr) {
    return arr.map(nome => nome[0]);
}

// Invoca la funzione qui e stampa il risultato in console

console.log(estraiIniziali(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]