const { server } = require('webapi-framework')

require('./src/Routes/routes')(server);

exports.server = server;