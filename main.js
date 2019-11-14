var kilometri = prompt('Quanti km devi percorrere?');
var eta = prompt('Quanti anni hai?');
console.log(kilometri);
console.log(eta);
document.getElementById('km-viaggio').innerHTML = kilometri;
document.getElementById('eta-utente').innerHTML = eta;
var prezzoBiglietto = (kilometri * 0.21);
if (eta < 18) {
    prezzoBiglietto = (kilometri * 0.21) - (kilometri * 0.21) * 20 / 100;
} else if (eta > 65) {
    prezzoBiglietto = (kilometri * 0.21) - (kilometri * 0.21) * 40 / 100;
}
console.log(prezzoBiglietto);
document.getElementById('prezzo-finale').innerHTML = prezzoBiglietto;
