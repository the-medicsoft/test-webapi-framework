const BaseModel = require("@the-medicsoft/webapi-framework/lib/models/BaseModel");

class PersonModel extends BaseModel {
  constructor() {
    super(undefined);
  }

  async read() {
    const persons = [
      {
        name: "Aakash Verma",
        age: 26
      },
      {
        name: "Ankit Chawla",
        age: 22
      }
    ];

    return super.success({ total: persons.length, data: persons });
  }
}

module.exports = PersonModel;
