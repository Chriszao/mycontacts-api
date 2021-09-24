const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  // Get a single registration
  show() {

  }

  // Create a new register
  store() {

  }

  // update a register
  update() {

  }

  // delete a register
  delete() {

  }
}

// Singleton
module.exports = new ContactController();
