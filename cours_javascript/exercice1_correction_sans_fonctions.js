/*
 * Exercice 
 *
 * Créer une fonction permettant de trouver la salle la mieux adaptée pour le cours et la tester.
 * - la salle doit être de taille suffisante pour accueillir tout le monde
 * - le nombre de places excédentaires doit être le plus petit possible
 */

// Les noms des salles et leur nombre de places sont définis ci-dessous
const batiment = [
  {nom: 'salle1', nbPlaces: 25},
  {nom: 'salle2', nbPlaces: 14},
  {nom: 'salle3', nbPlaces: 16},
  {nom: 'salle4', nbPlaces: 40},
  {nom: 'salle5', nbPlaces: 38}
]

// Le nombre d'étudiant-e-s est généré aléatoirement
const tailleMax = 50;
const nbStudents = Math.round(Math.random()*tailleMax);
console.log("nbStudents: ", nbStudents);

/* Si la salle est suffisamment grande,
 * nous allons avoir besoin de connaître
 * la différence entre le nombre d'étudiant-e-s et le nombre de places dans la salle
 * afin de vérifier la deuxième condition de l'énoncé
 * Stockons cette information dans une variable que l'on appellera "diff"
 */
let diff;

/*
 * L'objectif étant de déterminer quelle est la salle avec la différence la plus petite,
 * dans notre boucle, à chaque fois que la valeur de diff sera plus petite que la plus petite valeur enregistrée,
 * nous garderons diff comme nouvelle plus petite valeur.
 * Stockons cette valeur dans une variable "plusPetiteDiff".
 * Afin de pouvoir comparer diff à plusPetiteDiff lors du premier tour de boucle, il nous faut lui assigner une valeur initiale.
 * Il ne faut pas que la différence puisse être supèrieure à cette valeur initiale.
 * Nous voyons que nbStudents est compris entre 0 et tailleMax (qui vaut 50) et qu'il n'y a pas de salles avec plus de 50 places (ou moins de 0 places)
 * La différence entre nbStudents et le nombre de places d'une salle ne peut donc être supèrieur à 50.
 * Utilisons cette valeur pour initialiser plusPetiteDiff
 */
let plusPetiteDiff = tailleMax;

// Enfin, créons une variable pour stocker notre résultat, dont nous pourrons ensuite afficher les caractéristiques
// on l'initialise à null pour gérer le cas où nous ne trouverions pas de meilleure salle
let meilleureSalle = null;


// On parcourt élément par élément, grâce à la boucle for, le tableau batiment, qui contient l'ensemble des salles de cours, avec leur nom et leur nombre de places
for (let i=0; i<batiment.length; i++) {
  let salle = batiment[i];

  // Si le nombre d'étudiant-e-s est inférieur au nombre de places dans la salle...
  if (nbStudents <= salle.nbPlaces) {
    console.log("la salle " + salle.nom + " est suffisament grande");
    // ...on actualise la variable diff puis on la compare avec la plusPetiteDiff actuelle
    diff = salle.nbPlaces - nbStudents;
    console.log("la différence entre son nombre de places et le nombre d'étudiant-e-s est de ", diff);
    // Si diff est plus petit que plusPetiteDiff, on remplace la valeur contenue dans plusPetiteDiff par la valeur de diff
    // La salle concernée devient la meilleure salle
    if (diff < plusPetiteDiff) {
      plusPetiteDiff = diff;
      meilleureSalle = salle;
    }
  }
  // Tant que l'on a pas parcouru tous les éléments du tableau, on refait un tour de boucle sur l'élément suivant
}

// Si au moins une salle convient, nous pouvons afficher le résultat:
if (meilleureSalle) {
  console.log(`Avec ${plusPetiteDiff} places excédentaires, ${meilleureSalle.nom} est la salle la mieux adaptée pour ce cours`);
} else {
  console.log("Aucune salle n'est suffisamment grande pour ce cours");
}
