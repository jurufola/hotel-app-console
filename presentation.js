 // récupération du module `readline`
 const readline = require('readline');
 // création d'un objet `rl` permettant de récupérer la saisie utilisateur
 const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
 });
 
//import Service from 'services'; Ne fonctionne pas
const serviceClass = require('./services');
const service = new serviceClass.Service();

 // Recuperation Objet services
 //const service = new Service();

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
                     service.listeClients().then(response => {
                       // console.log(response.body);
                       console.log("je suis dans le then");
                       console.log(response);
                     }).catch(err=>{
                        //console.log(err);
                        console.log('je suis dans le catch')
                     });
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