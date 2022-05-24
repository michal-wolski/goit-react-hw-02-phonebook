import React from 'react';
import PropTypes from 'prop-types';

const contacts = [
  {
    name: 'michal',
    id: 1234,
  },
  {
    name: 'Elzbieta',
    id: 342342,
  },
];

const ContactList = ({ contacts }) => {
  return (
    <>
      <ul>
        {contacts.map(contacts => (
          <li key={contacts.id}>{contacts.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
