const clients = require('./clients.json');

export default class Service {

    constructor(){
        this.clients = clients;
        
    }
    listeClients() {
        
        return new Promise((resolve, reject) => {
            setTimeout( (lesclients, err) => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                lesclients
                if(trip!=undefined) {
                    //console.log('je suis dans le if trip not null ' + trip)
                    resolve(trip); // en cas de succès
        
                } else {
                   // console.log('je suis dans le if trip null ' + trip);
                   err =  `No trip with name ${tripName}`;
                    reject(err); // en cas d'erreur `No trip with name xxx ${tripName}`
                    }
            }, 2000)
        });
        clients.forEach(client => {
            console.log(`${client.nom}  ${client.prenom}`);
        });
    }

    ajoutNouveauClient(saisie) {

        const tab = saisie.split(' ');
        console.log(tab);

        const client = {
            "id": clients.length + 1 ,
            "prenom": tab[0],
            "nom": tab[1]
        }
        clients.push(client);
        //console.log(clients);
        listeClients();
}
}







exports.ajoutNouveauClient = ajoutNouveauClient;

return new Promise((resolve, reject) => {
    setTimeout( (trip, err) => {
        // ici l'exécution du code est asynchrone
        // TODO utiliser resolve et reject en fonction du résultat de la recherche
        // this.services.values().next().value;//this.tripPresent(tripName)
         trip = this.tripPresent(tripName)
         //console.log("c est le trip touvé " + trip);
        if(trip!=undefined) {
            //console.log('je suis dans le if trip not null ' + trip)
            resolve(trip); // en cas de succès

        } else {
           // console.log('je suis dans le if trip null ' + trip);
           err =  `No trip with name ${tripName}`;
            reject(err); // en cas d'erreur `No trip with name xxx ${tripName}`
            }
    }, 2000)
});
