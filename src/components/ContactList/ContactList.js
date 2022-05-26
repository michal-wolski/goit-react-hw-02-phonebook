import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul>
        {contacts.map(contacts => (
          <>
            <li key={contacts.id}>
              {contacts.name}: {contacts.number}
            </li>
            <button type="button" onClick={() => deleteContact(contacts.id)}>
              Delete
            </button>
          </>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
