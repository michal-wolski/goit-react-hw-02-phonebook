import React from 'react';
import PropTypes from 'prop-types';

const CreateContact = ({ name, nameId, handleOnChangeInput, handleSubmit }) => {
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
};

export default CreateContact;
