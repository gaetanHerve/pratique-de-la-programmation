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

