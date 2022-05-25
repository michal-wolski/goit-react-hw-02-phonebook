import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, filter, handleOnChangeInput }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name={filter}
        value={filter}
        onChange={handleOnChangeInput}
      ></input>
      <ul>
        {contacts.map(contacts => (
          <li key={contacts.id}>
            {contacts.name}, {contacts.number}
          </li>
        ))}
      </ul>
    </>
  );
  console.log(filter);
};

export default ContactList;
