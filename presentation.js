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
   
        rl.question('', function(saisie) {
                traiterSaisie(saisie)
            });
    //}
    
}

function affichMenu() {
    console.log("1. Lister les clients");
    console.log("2. Ajout nouveau client");
    console.log("99. Sortir");  
}

exports.affichMenu = affichMenu;

function traiterSaisie(reponse){
    switch(reponse){
        case '99' : console.log("Au revoir");
                    rl.close();
                    console.log('fin case 99')
                    return;
        case '1' : console.log('Liste des clients');
                    service.listeClients();
                    console.log('fin case 1')
                    break;
        case '2' : console.log('Ajout nouveau client');
                    rl.question('Veuillez saisir le nom du client : ', function(saisie) {
                        service.ajoutNouveauClient(saisie);
                    });
                    console.log('fin case 2')
                   break;
        default : console.log('Choix non disponible');
    }
    affichMenu();
    start();
}
exports.start = start;