console.log("\n##### Exos fonction création#####\n"); //https://thomgo.github.io/Exercices/frontend/javascript/debutant/functions_creation/functions_creation.html

console.log("\n# Exercice 1#\n");
// Exercice 1__________________________________________________________________________________________________________________________________

function product(a, b) {
    return a * b;
} 
var result = product(4, 30);
console.log("The result of the function is : " + result);
// En l'état rien ne s'affiche car la fonction doit être appelée
product();
// En l'état la fonction n'a pas d'intérêt car autant faire un console.log directement
// D'après son nom, cette fonction devrait donner le resultat d'une multiplication, ce n'est donc pas cohérent avec le code actuel
// Après modification, le resultat de la * s'affiche. C'est déjà plus cohérent
// Le problème de la fonction en l'état est qu'elle ne sert que pour une seule opération



console.log("\n# Exercice 2#\n");
// Exercice 2__________________________________________________________________________________________________________________________________

function showDigits() {
    for (var i=0; i <10 ; i++) {
        console.log(i);
    }
}
showDigits();



console.log("\n# Exercice 3#\n");
// Exercice 3_________________________________________________________________________________________________________________________________

function welcome(firstname, lastname) {
    return firstname + " " + lastname;
}
var message = welcome("Vitality", "Kaydop");
console.log("Welcome to our site " + message);



console.log("\n# Exercice 4#\n");
// Exercice 4_________________________________________________________________________________________________________________________________

function isAdult(currentYear, birthYear) {
    return currentYear - birthYear;
}
var age = isAdult(2021, 2001);
if (age < 18) {
    console.log("Tu es trop jeune pour pouvoir accéder à ce site")
} else {
    console.log("Bienvenu sur le site");
}


console.log("\n# Exercice 4 bis#\n");
// Exercice 4 bis________________________________________________________________________________________________________________________________

function isAdult(age=false){
    if(age){
      return (age >= 18) ? true : false;
    }
    return false;
  }
  
  if (isAdult(22)) {
    console.log("Welcome to the site");
  }

  

  console.log("\n# Exercice 5#\n");
// Exercice 5___________________________________________________________________________________________________________________________________

function birthYear(age=false) {
    if (age) {
      return new Date().getFullYear() - age;
    }
    return "No age given";
  }
  
  console.log(birthYear(45));
