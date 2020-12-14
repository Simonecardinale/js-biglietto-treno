var chilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));

var eta = parseInt(prompt("Quanti anni hai?"));

var tariffa = 0.21;

var prezzo = (chilometri*tariffa).toFixed(2); //prezzo standard

if (eta < 18){
    prezzo=(prezzo-(prezzo*20/100)).toFixed(2);
} else if (eta > 65) {
    prezzo=(prezzo-(prezzo*40/100)).toFixed(2);
}

document.getElementById("biglietto").innerHTML += prezzo + " €";