var chilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));

var eta = parseInt(prompt("Quanti anni hai?"));

var tariffa = 0.21;

var prezzo = chilometri*tariffa; //prezzo standard

if (eta < 18){
    prezzo-=(prezzo*20/100);
} else if (eta > 65) {
    prezzo-=(prezzo*40/100);
}

document.getElementById("biglietto").innerHTML= prezzo + " €";