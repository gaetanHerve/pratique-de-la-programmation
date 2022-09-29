# Bases de la programmation en javascript


## Quelques ressources

**Environnements pour programmer :**
- En ligne : [codepen](https://codepen.io), par exemple
- En local : il existe de multiples IDE (pour *Integrated Developpement Environment*). En voici 2 parmi les plus utilisés et compatibles windows/macOS/linux :
    - [Atom](https://atom.io/) (gratuit et open-source)
    - [Visual Studio Code](https://code.visualstudio.com/) (gratuit et propriétaire)


**Ressources en ligne**
- [Support pour ce cours](https://github.com/gaetanHerve/pratique-de-la-programmation)

Documentation et tutoriels
- [Javascript Reference](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference)
- [W3Schools](https://www.w3schools.com/)
- [Openclassrooms](https://openclassrooms.com/fr/courses/6175841-apprenez-a-programmer-avec-javascript)


## Eléments fondamentaux pour l'écriture de code informatique

Le contenu ci-dessous se réfère exclusivement à du code javascript.
La plupart des concepts se retrouvent dans d'autres langages de programmation, mais leurs graphie et/ou principes de mise en oeuvre peuvent varier.


### Les commentaires

Commenter son code est important pour sa clarté.
Les commentaires servent à apporter des précisions sur le rôle des fichiers, des algorithmes ou des fonctions utilisés.
Bien que la règle de base est de faire en sorte que notre code soit clair et non-ambigu, cela n'est pas toujours suffisant.
Il est dans ce cas d'usage d'apporter des précisions sous forme de commentaires.

Ils permettent également, durant le processus de programmation, de se donner des points de repères afin de structurer et de se souvenir de notre raisonnement.

Du point de vue de la machine, les commentaires sont des lignes qui n'ont pas vocation à être utilisées dans l'interprétation ou la compilation du programme.

Les lignes de commentaires sont introduites par des caractères dédiés.
Ils varient en fonction des langages de programmation.
**#** ou **//** sont les plus communs.

En Javascript:

```
// Ceci est un commentaire
```

```
/*
 * Ceci est un commentaire
 * de plusieurs lignes
 */
```

### Les logs

Le principe du log est d'afficher des éléments à l'exécution de notre code.
Cet affichage se fait généralement dans la console de notre IDE
(ou de notre navigateur web dans le cas de javascript).
En javascript, les logs se font grâce à la fonction 'console.log()'.
Il est possible d'utiliser console.log de manières variées en fonction de nos besoins.
James Q Quick explique certains de ces usages ici :
https://www.youtube.com/watch?v=_QtUGdaCb1c 


Exemple de log basique en javascript :
```
console.log("ceci apparaîtra dans ma console à l'exécution du code");
```

### Les variables

Les variables représentent les données que notre programme va manipuler.
Une varibale consiste pour la machine en l'attribution d'un espace de stockage en mémoire. Cet espace possède une adresse et peut accueillir des données.
Pour être utilisée, une variable doit être déclarée. Cela déclenche l'attribution de l'espace mémoire et relie son adresse à une valeur symbolique : le nom que l'on a donné à la variable. Ce nom est ce que l'on va utiliser dans notre code pour accéder aux données contenues en mémoire.


#### **Déclarer une variable**

Exemple de déclaration de variable :

```
let maVariable = 10;
```

- Ici, on utilise le mot-clé **let** pour signifier que ce qui va suivre est la déclaration d'une varibale.
Les mots clés *var* ou *const* peuvent s'y substituer, avec certaines nuances. Pour l'instant, nous utiliserons *let* par défaut.
- **maVariable** est le nom que l'on attribue à cette variable. Par convention, en Javascript, les variables sont nommées en lowerCamelCase (tout attaché, les mots la composant commençant par une majuscule à l'excepetion de la première lettre). Il est important de respecter cette convention pour la lisibilité du code.  
- **10** est la valeur que l'on affecte à cette variable.

Notons qu'il est également possible de déclarer une variable sans lui affecter de valeur.


#### **Accéder au contenu d'une variable**

Une fois que ma variable est déclarée, je peux y faire appel, sans le mot-clé *let* pour accéder à ou modifier ses données :

```
console.log(maVariable);
```
...affichera la valeur de maVariable en console.


#### **Modifier le contenu d'une variable**

_Note: cela n'est pas possible si la variable a été déclarée avec le mot-clé **const**._

Il suffit d'affecter une nouvelle valeur à la variable grâce à l'opérateur **=**. Comme pour accéder à son contenu, on n'utilise pas de mot-clé (cela reviendrait à vouloir déclarer une nouvelle variable avec le même nom) :

```
maVariable = 12;
```


### Les types de données

Outre son nom et sa valeur (*i.e.* son contenu), une variable possède un **type**, qui détermine le type de données que l'on va vouloir lui affecter.

Certains langages de programmation requièrent que le type soit explicité au moment de la déclaration des variables. Ca n'est pas le cas de Javascript. Cela rend ce langage plus souple et permissif, mais nécessite d'être constamment vigilant quand au type de données que l'on manipule.

Ci-dessous, la description des types de données les plus utilisés.

#### **string**

Une string (*i.e.* une chaîne de caractères) est un ensemble de caractères. Elle s'écrit entre simple quote **'** ou double quotes **"**

Exemples:
```
'ceci est une string'
"ceci est également une string"
```

#### **integer** ou *int*

Un integer (*i.e.* un entier) est une valeur numérique entière. On peut notamment la manipuler à l'aide d'**opérateurs mathématiques** (*+*, *-*, *\**, */* ...)

Exemple :

```
let maVariable = 15;
let resultat = maVariable * 2;
console.log(resultat);
```
...affichera *30* dans la console

#### **float**

Une float (*i.e.*) une valeur décimale, se manipule de manière relativement similaire un un integer. La différence réside principalement dans la taille de la mémoire alouée. Il vaut donc mieux (lorsque la question se pose) attribuer un type integer à une varibale si l'on a pas besoin d'utiliser de décimales.

#### **Array**

Un array est un tableau indexé de valeurs. Il permet de stocker plusieurs éléments et d'accéder à chacun de ces éléments, notamment grâce à son index.

_Note : l'index d'un array commence par 0. Le premier élément est donc situé à l'index 0, le cinquième élément à l'index 4._

Le type Array permet un grand nombre de manipulations spécifiques (filtres, tri, opération sur l'ensemble des éléments, boucles...).

Exemple :

```
let monArray = ["machin", "chose", "bidule"];
console.log(monArray[0]);
```
...va afficher en console le premier élément de monArray, c'est-à-dire **"machin"**.

#### **Boolean**

Un booléen est un type qui ne peut prendre que deux valeurs, **true** ou **false**.
Il est particulièrement utile dans le cas de conditions.

Exemple :

```
let bool = false;
if (bool) {
    console.log("bool est vrai");
} else {
    console.log("bool est faux);
}
```
...affichera **"bool est faux"** dans la console.

### Les conditions

Exemple :
```
let nbStudents = Math.random()*25;
console.log('nbStudents: ', nbStudents);

if (nbStudents > 10) {
    console.log('ceci est vrai');
} else if (nbStudents < 0) {
    console.log("il n'y pas d'étudiant"); 
} else {
    console.log('ceci est faux');
}

console.log("je suis après la condition")
```

