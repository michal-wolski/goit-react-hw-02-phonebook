import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import CreateContact from './CreateContact/CreateContact';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { FilterContactsByName } from './Utils/FilterContactsByName';

Notiflix.Notify.init({
  width: '280px',
  position: 'center-top',
});
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  inputIds = {
    nameId: nanoid(),
    numberId: nanoid(),
  };

  handleOnChangeInput = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  handleSubmit = evt => {
    const { name, number, contacts } = this.state;
    evt.preventDefault();
    const createContact = {
      id: nanoid(),
      name,
      number,
    };
    if (contacts.find(contact => contact.name === name)) {
      Notiflix.Notify.info('This name already exists');
    } else {
      this.setState(state => ({
        contacts: [...state.contacts, createContact],
      }));
    }
  };

  handleDeleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { nameId, numberId } = this.inputIds;
    const { contacts, filter } = this.state;
    const filtedContacts = FilterContactsByName(contacts, filter);

    return (
      <>
        <h1>Phonebook</h1>
        <CreateContact
          handleOnChangeInput={this.handleOnChangeInput}
          handleSubmit={this.handleSubmit}
          nameId={nameId}
          numberId={numberId}
        />
        <h2>Contacts</h2>

        <Filter
          filter={filter}
          handleOnChangeInput={this.handleOnChangeInput}
        />
        <ContactList
          contacts={filtedContacts}
          deleteContact={this.handleDeleteContact}
        />
      </>
    );
  }
}

export default App;
