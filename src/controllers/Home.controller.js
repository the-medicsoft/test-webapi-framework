const { BaseController } = require("@the-medicsoft/webapi-framework");

// Models
const Person = require("../models/Person.model");

class HomeController extends BaseController {
  constructor() {
    super();
  }

  async greet(req, res) {
    try {
      const response = await new Person().read();

      super.sendResponse({ req, res, response });
    } catch (err) {
      super.sendErrorResponse({ req, res, errResponse: err });
    }
  }
}

module.exports = HomeController;
