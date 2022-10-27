# Installer et utiliser Nodejs

## installer nodejs

### Windows et macOS

- se rendre sur nodejs.org
- télécharger la version conseiller
- installer
- vérifier l'installation

Pour vérifier l'installation, ouvrir le terminal (macOS) ou l'invite de ligne de commande (Windows) et taper la comande `node -v`.

La réponse est le numéro de version du nodejs que vous avez installé.

Si la commande est non reconnue, nodejs n'est pas installé.

Vous trouverez des ressources pour utiliser l'invite de ligne de commandes [ici](https://www.makeuseof.com/tag/a-beginners-guide-to-the-windows-command-line/).

Vous trouverez des ressources pour utiliser le terminal MacOS (la plupart des commandes de base sont identiques à celles utilisées sous Linux) [ici](https://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line).

### sur Linux

- ouvrir un terminal. [Un guide pour se familiariser avec les lignes de commande](https://ubuntu.com/tutorials/command-line-for-beginners#1-overview)
- en fonction de votre distribution le gestionnaire de paquets (et donc la commande d'installation) peut varier. Sous Ubuntu, la commande pour installer nodejs est `apt-get install nodejs`. #comment:(vérifier cette commande)

Pour la vérification de l'installation, ouvrir un terminal et taper la commande `node -v` qui, si tout s'est bien passé, vous renvoie le numéro de la version de nodejs installée.

## Utiliser nodejs pour exécuter votre code javascript

- créer un dossier dans lequel vous allez créer vos fichiers javascript.
- avec cotre terminal ou l'invite de ligne de commandes se placer dans ce dossier (avec la commande `cd` suivie du chemin vers le dossier).
- créer un fichier package.json avec la commande `npm init`
- sauf intention spécifique de votre part, accepter successivement les valeurs par défaut qui vous sont proposées
- un fichier package.json a été créé dans votre dossier
- créez un fichier javascript avec un console.log("la chaîne de caracrtères que vous voulez voir apparaître dans mon terminal") pour test.
- placés dans le votre dossier, rentrez la commande `node nomDeVotreFichier` dans votre terminal ou l'invite de ligne de commande.
- ce que vous avez mis dans votre console.log doit s'afficher dans votre terminal.

Et voilà, vous avez créé un serveur node permettant d'exécuter votre code javascript !