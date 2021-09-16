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
var letters = texte.split("");
console.log(letters);

var words = texte.split(" ");
console.log(words);

console.log("\n# Exercice 6#\n");
// Exercice 6_____________________________________________________________________________________________________________________________________

var name = "Paul Dumas";
var expectedName = "paul dumas";
if (name.toLocaleLowerCase() === expectedName) {
  console.log("OK Paul you can come in");
}
else {
  console.log("We do not know you");
}
//L'usage de cette fonction sur un site serait sûrement de gérer des infos irrecevable en majuscule
// toLocaleUpperCase()

console.log("\n# Exercice 7#\n");
// Exercice 7_____________________________________________________________________________________________________________________________________

var newStudent = "Ryan Oper"
var students = [
  "John Doe",
  "Jane Doe",
  "Marc Alm",
  "Jimmy Turner"
]
console.log(newStudent);
console.log(students); 
students.push(newStudent);
console.log(students);
students.push("Franck Martin", "Tom Hawkins");
console.log(students);

console.log("\n# Exercice 8#\n");
// Exercice 8____________________________________________________________________________________________________________________________________

var transactions = [
  102,
  50,
  4563,
  42,
  78,
  146,
  10563
]

var researched = 4563;
console.log(transactions.includes(researched));
// true avec 42 (et tous les nombre de la var transactions), false avec 44 (et tous les nombres absent de la var transactions)
// La fonction includes() permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon.
if (transactions.includes(researched)) {
  console.log("We found a matching transaction");
}
else {
  console.log("No match");
}

console.log("\n# Exercice 9#\n");
// Exercice 9____________________________________________________________________________________________________________________________________

var students = [
  "John Doe",
  "Jane Doe",
  "Marc Alm",
  "Jimmy Turner"
]
console.log(students);
students.sort();
console.log(students);
var lastElement = students[students.length - 1];
console.log(lastElement);