console.log("\n##### Exos fonction native#####\n"); //https://thomgo.github.io/Exercices/frontend/javascript/debutant/functions_native/functions_native.html

console.log("\n# Exercice 1#\n");
// Exercice 1________________________________________________________________________________________________________________________________________

// La fonction Math.random() renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle [0, 1[
    var retour = Math.random();
    console.log(retour);

console.log("\n# Exercice 2#\n");
// Exercice 2________________________________________________________________________________________________________________________________________

var number = 12.42359;
console.log(number);
number = Math.round(number);
console.log(number);
// Les nombres sont arrondi au nombre entier le plus proche, et au nombre entier supérieur si égale distance
number = number.toFixed(2);
console.log(number);

console.log("\n# Exercice 3#\n");
// Exercice 3________________________________________________________________________________________________________________________________________

var age = "35";
console.log(typeof age);
// La valeur de la variable est une string
parseInt(age);
console.log(age);

console.log("\n# Exercice 4#\n");
// Exercice 4________________________________________________________________________________________________________________________________________

var texte = "RocketLeague";
var maxLength = 20;
console.log(texte + " mesure " + texte.length + " codets");
if (texte > maxLength) {
    console.log("Your texte is too long");
  }
  else {
    console.log("Ok");
  }

console.log("\n# Exercice 5#\n");
// Exercice 5______________________________________________________________________________________________________________________________________

var texte = "A nice boat"
console.log(typeof texte);
// String
