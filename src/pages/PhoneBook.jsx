import { useState } from 'react';

import React from 'react';

import { ContactForm, Filter, ContactList } from '../components/phoneBook';
import useLocalStorage from '../hooks/useLocalStorage';
import shortid from 'shortid';

function PhoneBook() {
  const [contacts, setContacts] = useLocalStorage('array', []);
  const [filter, setFilter] = useState('');

  const addContacts = ({ name, number }) => {
    const sameName = contacts.map((el) => el.name).includes(name);
    if (!sameName) {
      setContacts([{ id: shortid(), name, number }, ...contacts]);
    } else {
      alert(`${name} is already in contacts!`);
    }
  };

  const changeFilter = (data) => {
    setFilter(data);
  };

  const filteredArrey = () => {
    // const normalizeFilter = filter.toLowerCase();
    return contacts
      .filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <div className="PhoneBook">
      <h2>Phonebook</h2>
      <ContactForm toSetContacts={addContacts} />
      <Filter value={filter} changeFilter={changeFilter} />

      <h2>Contacts</h2>

      {contacts.length === 0 ? (
        <span className="span">Add contacts!</span>
      ) : (
        <ContactList array={filteredArrey()} deleteContact={deleteContact} />
      )}
    </div>
  );
}

export default PhoneBook;
