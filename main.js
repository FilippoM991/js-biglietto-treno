var kilometri = parseInt (prompt('Quanti km devi percorrere?(Scrivi un numero intero e mi raccomando niente lettere, altrimenti ti facciamo pagare di più!)'));
var eta = parseInt (prompt('Quanti anni hai? (Scrivi un numero intero e mi raccomando niente lettere, altrimenti ti facciamo pagare di più!)'));
// console.log(kilometri);
// console.log(eta);
document.getElementById('km-viaggio').innerHTML = kilometri;
document.getElementById('eta-utente').innerHTML = eta;
var prezzoBiglietto = (kilometri * 0.21);
if (eta < 18) {
    prezzoBiglietto = (kilometri * 0.21) - ((kilometri * 0.21) * 20) / 100;
} else if (eta > 65) {
    prezzoBiglietto = (kilometri * 0.21) - (kilometri * 0.21) * 40 / 100;
}
// if (isNaN(prezzoBiglietto)) {
//     document.getElementById('prezzo-finale').innerHTML = "Riprova a inserire i dati, ricorda..solo numeri interi, niente lettere!";
// }
// il comando sopra con if non funziona!


// due metodi per arrotondare!
var prezzoBigliettoArrotondato = (Math.trunc(prezzoBiglietto * 100))/100;
// var prezzoBigliettoArrotondato = prezzoBiglietto.toFixed(2);
document.getElementById('prezzo-finale').innerHTML = prezzoBigliettoArrotondato;
