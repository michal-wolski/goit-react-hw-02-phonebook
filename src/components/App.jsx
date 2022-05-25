import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import CreateContact from './CreateContact/CreateContact';
import Title from './Title/Title';
import ContactList from './ContactList/ContactList';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  inputIds = {
    nameId: nanoid(),
  };

  contacts = [
    {
      name: 'michal',
      id: 1234,
    },
    {
      name: 'Elzbieta',
      id: 342342,
    },
  ];
  handleOnChangeInput = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    const { name, number, contacts } = this.state;
    e.preventDefault();
    const createContact = {
      id: nanoid(),
      name,
      number,
    };
    if (contacts.find(contact => contact.name === name)) {
      console.log('This name already exists');
    } else {
      this.setState(state => ({
        contacts: [...state.contacts, createContact],
      }));
    }
  };

  render() {
    return (
      <>
        <Title title="Phonebook" />
        <CreateContact
          handleOnChangeInput={this.handleOnChangeInput}
          handleSubmit={this.handleSubmit}
        />
        <Title title="Contacts" />
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
