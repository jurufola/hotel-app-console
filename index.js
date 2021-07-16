console.log('** Administration Hotel **');
var presentation = require('./presentation');

var start = presentation.start();
presentation.affichMenu();

const clients = require('./clients.json');

