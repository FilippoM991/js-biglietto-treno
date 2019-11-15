var chilometri = parseInt (prompt('Quanti km devi percorrere?(Scrivi un numero intero e mi raccomando niente lettere, altrimenti ti facciamo pagare di più!)'));
var eta = parseInt (prompt('Quanti anni hai? (Scrivi un numero intero e mi raccomando niente lettere, altrimenti ti facciamo pagare di più!)'));
// console.log(kilometri);
// console.log(eta);
document.getElementById('km-viaggio').innerHTML = chilometri;
document.getElementById('eta-utente').innerHTML = eta;
var prezzoBiglietto = (chilometri * 0.21);
if (eta < 18) {
    prezzoBiglietto = (chilometri * 0.21) - ((chilometri * 0.21) * 0.2);
} else if (eta > 65) {
    prezzoBiglietto = (chilometri * 0.21) - ((chilometri * 0.21) * 0.4);
}
if (isNaN(prezzoBiglietto)) {
    document.getElementById('risultato').innerHTML = "Riprova a inserire i dati, ricorda..solo numeri interi, niente lettere!";
} else {
    var prezzoBigliettoArrotondato = (Math.trunc(prezzoBiglietto * 100))/100;
    // var prezzoBigliettoArrotondato = prezzoBiglietto.toFixed(2);
    document.getElementById('prezzo-finale').innerHTML = prezzoBigliettoArrotondato;
}
// il comando sopra con if non funziona!


// due metodi per arrotondare!
