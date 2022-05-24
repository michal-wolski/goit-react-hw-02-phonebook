import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import CreateContact from './CreateContact/CreateContact';
import Title from './Title/Title';
import ContactList from './ContactList/ContactList';
class App extends Component {
  state = {
    contacts: [],
    name: '',
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
    const { name, contacts } = this.state;
    e.preventDefault();
    const createContact = {
      id: nanoid(),
      name,
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
