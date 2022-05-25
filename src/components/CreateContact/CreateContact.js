import React from 'react';
import PropTypes from 'prop-types';

const CreateContact = ({ name, number, handleOnChangeInput, handleSubmit }) => {
  return (
    <>
      <form>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleOnChangeInput}
          />
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleOnChangeInput}
          />
          <button type="submit" onClick={handleSubmit}>
            Add contact
          </button>
        </label>
      </form>
    </>
  );
};

CreateContact.propTypes = {
  name: PropTypes.string,
  nameId: PropTypes.number,
  number: PropTypes.number,
};

export default CreateContact;
