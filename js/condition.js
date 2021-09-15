// 14/09/21 Exercice 1 : https://thomgo.github.io/Exercices/frontend/javascript/debutant/conditions/conditions.html

if (true) {
    console.log("Condition is working !");
  }
  if (false) {
    console.log("Condition is working !");
  }
  else {
    console.log("Condition is not working !");
  }if (false === false) {
    console.log("Condition is working !");
  }

  // Exercice 2

  var content = 123;
  if (content) {
    console.log("Condition is OK");
  }
  else {
    console.log("Condition is KO");
  }

  // Exercice 3

  var price = "forty five";
  if (price === 45) {
    console.log("The price is a number");
  }
  else if (price == 45) {
    console.log("The price is a string");
  }
  else {
    console.log("The price is something else");
  }
  
  // Exercice 4 

  var age = 17
  if (age < 18) {
    console.log("Entry not allowed")
  }
  else {
      console.log("Entry allowed")
  }

  // Exercice 5 

  var store = ["Walmart", "Colorado", "South-park", 483];

if (store[0] === "Walmart" && store[2] === "South-Park") {
  console.log("The Walmart in South-Park has " + store[3] + " employees")
}
else if (store[0] === "Walmart" && store[1] === "Colorado") {
  console.log("Hum this is an other Walmart from Colorado");
}
else if(store[0] === "Walmart") {
  console.log("Too bad this is just a Walmart");
}
else {
  console.log("I do not know what this is");
}

 // Exercice 6

var student = {
    "Name" : "John Doe",
    "Grade" : 19
}
if (student.Grade < 10) {
    console.log("recalé");
}
else if (student.Grade <= 12) {
    console.log("Passable");
}
else if (student.Grade <= 14) {
    console.log("Moyen");
}
else if (student.Grade <= 16) {
    console.log("Bien");
}
else {
    console.log("Très bien");
}

// Exercice 7

var meal = {
    "foodType" : "meat",
    "cookedAt" : 80,
    "temperature" : 80
}
if (meal.temperature === meal.cookedAt) {
    console.log("Cooked");
}
else if (meal.temperature < meal.cookedAt) {
    console.log("Uncooked");
}
else {
    console.log("Overcooked");
}

// Exercice 8

var number = 42;
if (number < 0) {
  if(number = 0); {
    console.log("number is even");
  }
   {
    console.log("number is odd");
}
console.log("Please enter a number at least greater than 0"); }
