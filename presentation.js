 // récupération du module `readline`
 var readline = require('readline');
 // création d'un objet `rl` permettant de récupérer la saisie utilisateur
 var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
 });
 

 // Recuperation Objet services
 var service = require('./service');

 function start() {
    // affichMenu();
    
         rl.question('Choix du menu ', function(saisie) {
             //Deuxième paramètre une arrow function qui va être exécuté pour chaque cas mais au bon moment !
                 traiterSaisie(saisie,
                      ()=>{
                     affichMenu();
                     start();
                     }
                 )
                 
             });
     //}
     
 }
 
 function affichMenu() {
     console.log("1. Lister les clients");
     console.log("2. Ajout nouveau client");
     console.log("99. Sortir");  
 }
 
 exports.affichMenu = affichMenu;
 
 
 /**
  * 
  * @param {*} reponse 
  * @param {*} execute mon callback ()=>{
                     affichMenu();
                     start();
                     }
  * @returns 
  */
 function traiterSaisie(reponse,execute){
     switch(reponse){
         case '99' : console.log("Au revoir");
                     rl.close()
                     console.log('fin case 99')
                     return;
         case '1' : console.log('Liste des clients');
                     service.listeClients();
                     console.log('fin case 1');
                     execute();
                     break;
         case '2' : console.log('Ajout nouveau client');
                 
                     rl.question('Veuillez saisir le nom du client : ', function(newSaisie) {
                         service.ajoutNouveauClient(newSaisie);
                         console.log(`case 2 après appel service.ajouterNouveauClient(${newSaisie})`);
                         execute()
                     });
                    // console.log('fin case 2');
                    break;
         default : console.log('Choix non disponible');
                     execute()
                     break;
     }
     
 }
 exports.start = start;