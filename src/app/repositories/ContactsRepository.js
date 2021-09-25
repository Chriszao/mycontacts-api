const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Chris',
    email: 'chris.f.assis18@gmail.com',
    phone: '123-456',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Maria',
    email: 'mariaEdu@gmail.com',
    phone: '123-456',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      resolve(contacts = contacts.filter((contact) => contact.id !== id));
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
