// Selettori 
let addCounter = document.querySelector('.add');
let lowerCounter = document.querySelector('.lower');
let resetCounter = document.querySelector('.reset');

let count = 0;

addCounter.addEventListener("click",()=>{ // Evento
    count++; // Cambio Valore 
    document.getElementById('counter').innerHTML = count; // Visualizzazione Valore
}) ;

lowerCounter.addEventListener("click",()=>{ // Evento
    count--; // Cambio Valore
    document.getElementById('counter').innerHTML = count; // Visualizzazione Valore
});

resetCounter.addEventListener("click",()=>{ // Evento
    count = 0; // Cambio Valore
    document.getElementById('counter').innerHTML = count; // Visualizzazione Valore
});