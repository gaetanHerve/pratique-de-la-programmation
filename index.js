// type: integer
// let nbStudents = 25;

// type: string
let salut = "helloworld!";

// type: array => l'index commence à 0.
let myArray = [1, 2, 3,"hello", salut];
console.log(myArray[1]);

// CONDITIONS
let nbStudents = Math.random()*25;
console.log('nbStudents: ', nbStudents);
if (nbStudents > 10) {
    console.log('ceci est vrai');
} else if (nbStudents < 0) {
    console.log("il n'y pas d'étudiant"); 
} else {
    console.log('ceci est faux');
}

console.log("je suis après la condtion")

// console.log(nbStudents);

// EXERCICE 

// Utiliser Math.random()*50, stocker sa valeur dans une variable
let nbStudents2 = Math.random()*50;

// créer une variable placesMax
// correspondant au nombre maximum de places
// dans la salle de cours
let palcesMax = 20;

// comparer les valeurs et utiliser console.log()
// pour afficher si le cours peut avoir lieu
if (nbStudents < palcesMax) {
    console.log("le cours peut se tenir");
} else if (nbStudents == palcesMax) {
    console.log("c'est tout juste");
} else {
    console.log("le cours ne peut avoir lieu");
}


/*

// conditions
let nbStudents = Math.random()*50;
console.log()
if (1 === 2) {
  console.log("la première assertion est vraie");
} else if (1 === 3) {
  console.log("la seconde assertion est vraie");
} else {
  console.log("tout est faux");
}

console.log("on est après la condition")

*/