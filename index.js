const { server } = require("@the-medicsoft/webapi-framework/config");

require("./src/routes/routes")(server);

exports.server = server;
