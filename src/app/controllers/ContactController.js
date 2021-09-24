class ContactController {
  // List all registers
  index(request, response) {
    response.send('Send from contacts controller');
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
