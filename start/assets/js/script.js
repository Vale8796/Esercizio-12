var stringa = "Sto imparando JavaScript";
var maiuscolo = stringa.toUpperCase();
var minuscolo = stringa.toLowerCase();

document.getElementById('maiuscola').innerHTML = maiuscolo;
document.getElementById('minuscola').innerHTML = minuscolo;

var lista = stringa.split("");
document.getElementById('strArray').innerHTML = lista;

var stringa2 = stringa.charAt(2) + stringa.charAt(1) + stringa.charAt(14) + stringa.charAt(18);

document.getElementById('estraiCaratteri').innerHTML = stringa2;

var stringa3 = stringa.concat(' JS');
document.getElementById('concatena').innerHTML = stringa3;

var stringa4 = stringa.substring(5,9);
document.getElementById('estraiStringa').innerHTML = stringa4;

//riga due

const array = ['Giovanni','Carla','Piero','Mirtilla'];

document.getElementById('array').innerHTML = array;
document.getElementById('lunghezza').innerHTML = array.length;
document.getElementById('elemento').innerHTML = array[2];
document.getElementById('ultimo').innerHTML = array[array.length - 1];

var modificato = array.splice(2,1,'Massimo');
document.getElementById('modificato').innerHTML = array;

//riga tre

const anno = ['2001','1990','1987','2018','2010'];

function calcolaEta(anno) {
   eta = 2022 - anno;
   return eta;
}
document.getElementById('eta1').innerHTML += calcolaEta(anno[0]) + ' ' + 'anni';
document.getElementById('eta2').innerHTML += calcolaEta(anno[1]) + ' ' + 'anni';
document.getElementById('eta3').innerHTML += calcolaEta(anno[2]) + ' ' + 'anni';
document.getElementById('eta4').innerHTML += calcolaEta(anno[3]) + ' ' + 'anni';
document.getElementById('eta5').innerHTML += calcolaEta(anno[4]) + ' ' + 'anni';

const array1 = [calcolaEta(anno[0]),calcolaEta(anno[1]),calcolaEta(anno[2]),calcolaEta(anno[3]),calcolaEta(anno[4])];
document.getElementById('arrayEta').innerHTML += array1;

//riga quattro

const array2 = ['coniglio','cane','gatto','criceto'];

document.getElementById('intero').innerHTML = array2;

array2.push('leone');
document.getElementById('aggiunto').innerHTML = array2;
array2.pop();
document.getElementById('estratto').innerHTML = array2;

document.getElementById('verifica1').innerHTML = array2.includes('gatto');
document.getElementById('verifica2').innerHTML = array2.includes('ippopotamo');