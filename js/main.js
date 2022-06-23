// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio 
// in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


// * Salvo il bottone in variabile
    // ? lavorando sul click, allora tutto si svilupperà nel bottone, tranne le funzioni da richiamare
const playButton = document.getElementById('start_btn');

playButton.addEventListener('click', function(){  // TODO Lo useremo alla fine per avere tuto all'avvio del documento per ora!

// Richiamo il wrapper per poter inserir le cose dentro successivamente in modo più comodo
const gameWrapper = document.querySelector('.grid_wrapper');
gameWrapper.innerHTML = '';

// * creo le 100 caselle dinamicamente su js:
    //  ? creo un for per stampare le 100 caselle
    
   
for (let i = 0; i < 100; i++) {

    let gameGenerator = boxesGenerator('box', 'borders');
    gameGenerator.innerHTML = i +1;
    gameWrapper.append(gameGenerator);

    activateBoxes(gameGenerator, 'active');
    
}

})

// ? la modulazione delle 100 caselle la assegnerò ad una funzione richiamandola poi nel for
function boxesGenerator(classToAdd, classToAddTwo){
    let box = document.createElement('div');
    box.classList.add(classToAdd, classToAddTwo);
    return box;
}

// * Devo far attivare le caselle al click e cambia colore al click
    // ?  creo una classe 'attivo' su css (già creata)
    // ? creo una funzione che mi permetta al click, di cambiare la classe su js 
    // ? al click, mi darà anche il log con il numero della casella cliccata

function activateBoxes(elementPressed, effectToActivate){
    
    elementPressed.addEventListener('click', function(){
        elementPressed.classList.add(effectToActivate);
        console.log(elementPressed.innerHTML)
    })

}