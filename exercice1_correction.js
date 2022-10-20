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

/**
 * Renvoie la salle idéale, en termes de nombre de places, pour tenir cours
 * 
 * @param {Array} batiment les salles de cours et leur nombre de places
 * @param {int} nbStudents le nombre détudiant-e-s présent-e-s
 * @param {int} tailleMax la taille maximale d'une salle dans le bâtiment 
 * 
 * @return {Object} la salle dont la taille est au moins égale au nombre d'étudiant-e-s
 * et dont le nombre de places excédentaires est le plus petit.
 */
function getSalleIdeale(batiment, nbStudents, tailleMax) {
  let result = false;
  let minimumDiff = tailleMax;

  for (let salle of batiment) {
    if (salle.nbPlaces >= nbStudents) {
      if ((salle.nbPlaces - nbStudents) < minimumDiff) {
        result = salle;
        minimumDiff = salle.nbPlaces - nbStudents;
      }
    }
  }

  return result;
}

/**
 * Renvoie la salle la plus grande parmi un ensemble de salles
 * 
 * @param {Array} batiment les salles de cours et leur nombre de places
 * 
 * @return {Object} la salle dont le nombre de places est le plus grand
 */
function getSalleLaplusGrande(batiment) {
  let result;
  let capaciteMax = 0;

  for (let salle of batiment) {
    if (salle.nbPlaces > capaciteMax) {
      result = salle;
      capaciteMax = salle.nbPlaces;
    }
  }
  
  return result;
}

// On interprète les résultats
let salleIdeale = getSalleIdeale(batiment, nbStudents, tailleMax);

if (salleIdeale) {
  console.log(`la salle idéale pour ce cours est ${salleIdeale.nom}, avec ${salleIdeale.nbPlaces} places pour ${nbStudents} étudiant-e-s.`);
} else {
  let salleMax = getSalleLaplusGrande(batiment);
  console.log(`Aucune salle n'est suffisamment grande ; même ${salleMax.nom}, avec ses ${salleMax.nbPlaces} places, ne peut contenir les ${nbStudents} étudiant-e-s !`);
}