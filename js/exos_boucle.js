console.log("\n##### Exos boucle #####\n");

console.log("\n# Exercice 1#\n");
// Exercice 1 : https://thomgo.github.io/Exercices/frontend/javascript/debutant/loops/loops.html_____________________________________________________

var i = 0;
while (i <= 9) {
  console.log("One run of the loop");
  i +=2;
}
// La phrase est affichée 10 fois car elle se répète de 0 à 9.
// En remplaçant i++ par i+=2, la phrase se répète 5 fois.
// Si on supprime le i++, cela fait une boucle infinie ce qui surcharge la ram et plante la machine.

console.log("\n# Exercice 2#\n");
// Exercice 2 _______________________________________________________________________________________________________________________________________

for (var i=0; i <=9 ; i+=2) {
    console.log("One run of the loop");
  }
  // La phrase est affichée 10 fois car elle se répète de 0 à 9.
  // En remplaçant i++ par i+=2, la phrase se répète 5 fois.
  // Si on supprime le i++, cela fait une boucle infinie ce qui surcharge la ram et plante la machine.
  // Les avantages pour For sont la simplicité de rédaction et la simplicité de revisiter la ligne de code si besoin

  console.log("\n# Exercice 3#\n");
  // Exercice 3_______________________________________________________________________________________________________________________________________

  for (var i=0; i <= 100; i+=2) {
      console.log(i);
  }

  console.log("\n# Exercice 4#\n");
  // Exercice 4_______________________________________________________________________________________________________________________________________

  for (var i=0; i <= 100; i++) {
    if (i%2 === 0) {
        console.log(i + " is even");
    }
    else {
        console.log(i + " is odd");
    }
}

console.log("\n# Exercice 5#\n");
 // Exercice 5________________________________________________________________________________________________________________________________________

 var items = [
     "First item", "Second item", "Third item", "Fourth item"
 ];
 for (var i=0; i < 5; i++) {
    console.log(items[i]);
  }
  // Les 4 éléments s'affichent. i est un compteur dans "for". i est un index dans "items". Ce modèle permet l'énonciation du contenu string d'un tableau
  // Si on remplace par "i<5", un undefined apparaît. Car 5 ne correspond à rien dans le tableau

  console.log("\n# Exercice 6#\n");
  // Exercice 6_______________________________________________________________________________________________________________________________________

  customers = [
    "Albin Term",
    "Anna Sandgrove",
    "John Doe",
    "Terrance Head",
    "Yan Mock",
    "Zoe Durst"
  ];
  console.log("List of all customers : ");
  for (i=0; i < customers.length; i++) {
    console.log(customers[i]);
}

console.log("\n# Exercice 7#\n");
 // Exercice 7________________________________________________________________________________________________________________________________________

 var items = [
    "First item", "Second item", "Third item", "Fourth item"
];
 for (var item of items) {
     console.log(item); 
 }
 // On a pas accès aux indexes en l'état. 

 console.log("\n# Exercice 8#\n");
 // Exercice 8________________________________________________________________________________________________________________________________________

 var citizen = {
     "firstname" : "John",
     "lastname" : "Doe",
     "age" : 45,
     "income" : 60000
 }
 console.log("Citizen identity : ");
 