console.log("\n##### Exemples de variables #####\n")

// exemple of two variables with strings
var userFirstname = "David";
var baseSentence = "Salut ";

// Display of the two variables in the console of the web browser
console.log(baseSentence + userFirstname);

// Exemple of variable with incrementation
var age = 15;
console.log(age);
age = age + 1;
age += 1;
age ++;
console.log(age);

var isAdult = false;

// exercice 1

var items = new Array();
console.log(items);
items = [];
console.log(items);
items = ["a", "b"];
console.log(items);

// exercice 2

var items = [
    "premier élément",
    "deuxième élément",
    "troisième élément",
    "quatrième élément"
];
console.log(items);
console.log(items[1]);
console.log(items[3]);
console.log(items[0]);

// exercice 3

var player = [
    "John",
    "Doe",
    34,
    true
];
console.log(player);
console.log(player[0]);
console.log(player[1]);
console.log(player[0] + " " + player[1]);
player[2] = 40;
console.log(player[2]);
console.log(player[3]);
// Pas pratique si bcp de caractéristique

// exercice 4

var player = {
    "firstname" : "John",
    "lastname" : "Doe",
    "age" : 34,
    "isAdult" : true
};
console.log(player);
console.log(player["firstname"]);
console.log(player["lastname"]);
console.log(player["firstname"] + " " + player["lastname"]);
player["age"] = 40;
console.log(player["age"]);
console.log(player["isAdult"]);
// Pratique si bcp de caractéristique

// exercice 5

var car = {
    "type" : "Clio",
    "brand" : "Renault",
    "date" : "2006",
    "color" : "orange",
    "passengers" : ["Mike", "Claire", "Anna", "Louis"]
};
console.log(car);
console.log("une " + car["brand"] + " " + car["type"] + " " + "de couleur " + car["color"] + ", modèle " + car["date"] + " a été aperçu avec à son bord 4 passagers");
console.log(car["passengers"][0]);
console.log("4 individus on été aperçus à son bord: " + car["passengers"][3] + ", " + car["passengers"][1] + ", " + car["passengers"][0] + " et " + car["passengers"][2]);