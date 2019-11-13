const HomeController = require("../controllers/Home.controller");

module.exports = server => {
  server.route({
    url: "/home",
    method: "GET",
    handler: new HomeController().greet
  });
};
