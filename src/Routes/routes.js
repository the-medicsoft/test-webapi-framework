const HomeController = require('../controllers/HomeController');

module.exports = (server) => {
    server.route({
        url: '/home',
        method: 'GET',
        handler: new HomeController().greet
    });
};