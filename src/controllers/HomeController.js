const BaseController = require("@the-medicsoft/webapi-framework/lib/controllers/BaseController");

// Models
const Person = require("../models/Person");

class HomeController extends BaseController {
  constructor() {
    super();
  }

  async greet(req, res) {
    try {
      const response = await new Person().read();
      console.log(response);

      super.sendResponse({ req, res, response });
    } catch (err) {
      super.sendErrorResponse({ req, res, errResponse: err });
    }
  }
}

module.exports = HomeController;
