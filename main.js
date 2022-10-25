// *Snack1*
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
// (del numero inserito dall'utente: esempio se il numero dell'utente è 2, il numero successivo è 3 ).


function numero() {
    let numero = parseInt(prompt('Inserisci numero'));

    if ((numero % 2) == 0) {
        console.log(numero)
    }
    else {
        numero = numero + 1;
        console.log(numero)

    }

}


// *Snack2*
// Generatore di “nomi cognomi” casuali del grande gatsby:
// Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" 
// lista di invitati,dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle 
// liste precedentemente dette, scelti in modo casuale.

let names = ['Cristiano', 'Marco', 'Giovanni', 'Andrea']
let surnames = ['Altomonte', 'Inuso', 'Lombardo', 'Rossi']


function nomeCognome() {
    let randomName = Math.floor(Math.random() * names.length);
    let randomSurname = Math.floor(Math.random() * surnames.length);

    console.log(`${randomName, names[randomName]} ${randomSurname, surnames[randomSurname]}`);
}


// *Snack3*
// Crea un array di numeri interi e fai la somma di tutti gli elementi  
// che sono in posizione (indice) dispari

let numeriInteri = [5, 10, 15, 20, 30,5];
let somma = 0;

function generaSomma() {

    for (let i = 1; i < numeriInteri.length; i = i + 2) {
        somma += numeriInteri[i];
    }
    console.log("la somma totale è: ", somma);
}

// *Snack4 (Bonus)*
// Crea due array che hanno un numero di elementi diversi.  
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.


// let x = [1,2,3,4,5,6,7];
// let y = [1,2,3,4,];
// let differenzaxy = x.length - y.length;

