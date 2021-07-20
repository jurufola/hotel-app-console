console.log('** Administration Hotel **');
const presentation = require('./presentation');

const start = presentation.start();
presentation.affichMenu();

const clients = require('./clients.json');

