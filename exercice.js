/*
 * Exercice 
 *
 * Créer une fonction permettant
 * de trouver la salle la mieux adaptée pour le cours
 * et la tester.
 * - la salle doit être de taille suffisante
 *  pour accueillir tout le monde
 * - le nombre de places excédentaires
 *  doit être le plus petit possible
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

  console.log("test"); 