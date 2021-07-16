 // récupération du module `readline`
 var readline = require('readline');
 // création d'un objet `rl` permettant de récupérer la saisie utilisateur
 var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
 });

function start() {
    affichMenu();
   
        rl.question('', function(saisie) {
                traiterSaisie(saisie)
            });
    //}
    
}

function affichMenu() {
    console.log("1. Lister les clients");
    console.log("99. Sortir");  
}

function traiterSaisie(reponse){
    switch(reponse){
        case '99' : console.log("Au revoir");
                    rl.close();
                    return;
        case '1' : console.log('Liste des clients');
                   break;
        default : console.log('Choix non disponible');
    }
    start();
}
exports.start = start;