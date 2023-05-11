// import { useSelector } from 'react-redux';
// import { useState, useEffect } from 'react';
// import { getContacts, getFilter } from 'redux/selectors';
// import { updateFilter } from 'redux/contactsSlice';

import ContactForm from 'components/contactForm';
import Filter from 'components/filter';
import { ContactList } from 'components/contactList';

import './App.css';

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) ?? [];
  // });
  // const [filter, setFilter] = useState('');
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addNewContact = item => {
  //   const existen = contacts.find(
  //     contact => contact.name.toLowerCase() === item.name.toLowerCase()
  //   );

  //   if (existen) {
  //     alert(`${item.name} is already in contacts.`);
  //     return;
  //   }
  //   setContacts(prevContacts => [...prevContacts, item]);
  // };

  // const deleteContact = id => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== id)
  //   );
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
