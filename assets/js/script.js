// // utiliser console.log() afin d'avoir le résultat à l'instant T

let A = 0; //integer -> nombre entier
let B = 20;
let C = 5;
let D = "patates"; // string -> txt
let total = A+B*C+" "+D;

console.log(total)

let A1 = "vincent";
let A2 = "prais";
let A3 = "mis";
let A4 = "l'";
let A5 = "âne";
let A6 = "dans";
let A7 = "un";
let A8 = "pré";
let B1 = "s'";
let B2 = "vint";
let B3 = "autre";
let B4 = "et";
let B5 = "en";
let C1 = " ";
let total2 = A1+C1+A3+C1+A4+A5+C1+A6+C1+A7+C1+A8+C1+B4+C1+B1+B5+C1+B2+C1+A6+C1+A4+B3

console.log(total2)


// Exo 1 :
// Déclarer votrenom dans une variable et l'afficher dans la console et ans une alert()

// Exo 2 :
//  Déclarer une variable âge ( vous avez déjà la variabe nom).
//  Vous devez afficher dans la console la phrase :
//  "Je suis (nom) et j'ai (âge)"

// Exo 3 :
// ajouter un an a votre variable âge et aficher dans la console :
// "l'année prochaie j'aurais (âge +1)"

// Exo 4 (bonus):
// Je déclare deux variables.

/*
    let toto= 'toto';
    let tata ='tata';
*/

// But : inverser le contenu des variables.


// Exo 1 :

const FirstName = "Olivier";
const LastName = "Brun";
const Space = " ";
total = FirstName+" "+LastName;
alert(total);

console.log(total)

// Exo 2 :

const VieuxCon = 42;
const Year = "ans";
let Iam = "Je suis";
let AndI = "et j'ai";
total2 = Iam+" "+FirstName+" "+LastName+" "+AndI+" "+VieuxCon+Year;

console.log(total2)


// Exo 3 =

const  AgeIncrement = VieuxCon + 1;
const NextYear = "l'année prochaine";
const WillHave = "J'aurais"
total3 = NextYear+" "+WillHave+" "+AgeIncrement+" "+Year;

console.log(total3)

// Correction Exo 4 =

let toto = "toto";
let tata = "tata";
let inverse = "tata";
tata = toto;
toto = inverse;
console.log("dans toto:" + toto, "dans tata:" + tata)