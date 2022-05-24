# ProjetJS
Alexis H

Réalisation du projet  :

Gestion des stock d'un magasin de meubles. Lister tous les meubles ou un meuble. 
Ajouter un meuble. Supprimer un meuble. Modifier la quantitée disponible.


Lancer le projet :

> "npm i"
> "node server.js"


A revoir: 

Pour les fonctions PUT DELETE et PUSH ne renvoyer que les valeurs modifiés
Revoir les status pour chaques erreurs
(https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP)


Requetes avec Insomnia :

GET PAR ID:
http://localhost:3000/getMeublesById/IdDuMeubleVisé

DELETE:
http://localhost:3000/deleteMeubleById/IdDuMeubleVisé
code json: {"id": 1}

POST: 
http://localhost:3000/postMeuble
code json: {"name": "meuble test" }

GET ALL :
http://localhost:3000/getMeubles

PUT : 
http://localhost:3000/updateMeubleById/IdDuMeubleChoisi
code json: {"name": "meuble test2" }

----------- Partie discord -----------

Lancer le projet discord:

> "node discord.js"