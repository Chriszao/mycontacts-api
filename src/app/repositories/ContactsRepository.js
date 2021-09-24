const { uuid } = require('uuidv4');

const contacts = [{
  id: uuid(),
  name: 'Chris',
  email: 'chris.f.assis18@gmail.com',
  phone: '123-456',
  category_id: uuid(),
}];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
