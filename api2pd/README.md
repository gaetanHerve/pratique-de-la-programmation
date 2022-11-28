Api2pd est un exemple rudimentaire de requête d'api et d'envoi des données récupérées en osc vers pure data. N'hésitez pas à faire une copie du projet pour faire des tests ou réutiliser des parties du code.

# Pour tester api2pd

- installer les paquets node nécessaire au programme avec un terminal (ou invite de commande) en exécutant la commande `npm install` à la racine du dossier api2pd.

- ouvrir le patch pure data oscClient.pd (avec purr data ou pure data vanilla dans l'idéal, pd-extended ne reconnait pas l'objet netreceive. Peut être remplacé par des objets de la librairie Mr Peach).

- dans oscClient.pd, activer netReceive en cliquant sur le message "listen 3001"

- exécuter le fichier weatherApi.js en exécutant la commande `node weatherApi.js` à la racine du dossier api2pd

Les informations récupérées s'afficheront dans votre terminal. En fonction des routes affectées dans la patch pure data, les informations pourront s'afficher dans la console pure data.



