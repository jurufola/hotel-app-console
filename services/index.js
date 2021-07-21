const  request = require('request');

//const clients = require('../clients.json');
//const rp = require('request-promise');
 class Service {

    /*constructor(){
        //this.clients = clients;
        
    }*/
    /*Promise((resolve,reject)=>{
        request(`http://localhost:8090/parkings/${id}/reservations`,{},(err,response) =>
        {
            // callback(id); plus d'utilisation de callback
            // gestion des erreurs
            if(err){
                reject(err);
                // en cas d'erreur
        }
            else
            {
                resolve(JSON.parse(response.body));
                // en cas de succès
            }
        });
    });*/
    listeClients() {

        
        return new Promise((resolve, reject) => {
            
            request('http://localhost/json/clients.json', {}, (err, response) => {
                console.log(response);
                 if(err){

                     reject(err);
                 }
                 else {
                     resolve(JSON.parse(response.body));
                 }
            });
        });
        /*clients.forEach(client => {
            console.log(`${client.nom}  ${client.prenom}`);
        });*/
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

exports.Service = Service;







//exports.ajoutNouveauClient = ajoutNouveauClient;


