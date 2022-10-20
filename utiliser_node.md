# Installer et utiliser Nodejs

## installer nodejs

### Windows et macOS

- se rendre sur nodejs.org
- télécharger la version conseiller
- installer
- vérifier l'installation

Pour vérifier l'installation, ouvrir le terminal (macOS) ou commandPrompt (Windows) et taper la comande `node -v`.
La réponse est le numéro de version du nodejs que vous avez installé.
Si la commande est non reconnue, nodejs n'est pas installé.

### sur Linux 

- ouvrir un terminal
- en fonction de votre distribution le gestionnaire de paquets (et donc la commande d'installation) peut varier. Sous Ubuntu, la commande pour installer nodejs est `apt-get install nodejs`. #comment:(vérifier cette commande)

Pour la vérification de l'installation, ouvrir un terminal et taper la commande `node -v` qui, si tout s'est bien passé, vous renvoie le numéro de la version de nodejs installée.

## Utiliser nodejs pour exécuter votre code javascript

- créer un dossier dans lequel vous allez créer vos fichiers javascript.
- avec cotre terminal ou commandPrompt se placer dans ce dossier (avec la commande `cd` suivie du chemin vers le dossier).
- créer un fichier package.json avec la commande `npm init`
- sauf intention spécifique de votre part, accepter successivement les valeurs par défaut qui vous sont proposées
- un fichier package.json a été créé dans votre dossier
- créez un fichier javascript avec un console.log("la chaîne de caracrtères que vous voulez voir apparaître dans mon terminal") pour test.
- placés dans le votre dossier, rentrez la commande `node nomDeVotreFichier` dans votre terminal ou commandPrompt.
- ce que vous avez mis dans votre console.log doit s'afficher dans votre terminal.

Et voilà, vous avez créé un serveur node permettant d'exécuter votre code javascript !