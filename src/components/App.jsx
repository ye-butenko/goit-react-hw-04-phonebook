import React, { useState, useEffect, useCallback } from 'react';

import { StyledContainer } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handlerSubmit = useCallback(
    data => {
      if (contacts.find(contact => contact.name === data.name)) {
        alert(`${data.name} is already in contacts`);
      } else {
        setContacts(prevContacts => [data, ...prevContacts]);
      }
    },
    [contacts]
  );

  const onFilter = useCallback(e => {
    const { value } = e.currentTarget;
    setFilter(value);
  }, []);

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <StyledContainer>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handlerSubmit}></ContactForm>

      <h2>Contacts</h2>
      <Filter value={filter} onFilter={onFilter} />
      <ContactList deleteContact={deleteContact} contacts={filteredContacts} />
    </StyledContainer>
  );
};
