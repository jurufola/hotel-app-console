const clients = require('./clients.json');

function listeClients(){

    clients.forEach(client => {
        console.log(`${client.nom}  ${client.prenom}`);
    });

}

exports.listeClients = listeClients;