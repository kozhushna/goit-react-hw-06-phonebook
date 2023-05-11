import { useState, useEffect } from 'react';

import ContactForm from 'components/contactForm';
import Filter from 'components/filter';
import { ContactList } from 'components/contactList';

import './App.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = item => {
    const existen = contacts.find(
      contact => contact.name.toLowerCase() === item.name.toLowerCase()
    );

    if (existen) {
      alert(`${item.name} is already in contacts.`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, item]);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onAddNewContact={addNewContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
