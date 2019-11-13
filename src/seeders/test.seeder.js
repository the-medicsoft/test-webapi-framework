const PersonModel = require(`${process.cwd()}/src/models/Person.model.js`);

class TestSeeder {
  async run() {
    console.log("Test Seeder Run Completed");
    console.log(new PersonModel().read());
  }

  async drop() {
    console.log("Test Seeder Drop Completed");
  }
}

module.exports = TestSeeder;
