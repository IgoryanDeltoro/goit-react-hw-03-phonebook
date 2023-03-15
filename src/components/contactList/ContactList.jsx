/* eslint-disable array-callback-return */
import PropTypes from 'prop-types';
import css from '../contactList/ContactsList.module.css';

const ContactList = ({ contacts, filter, remove }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        const lowerCase = name.toLowerCase();
        if (lowerCase.includes(filter)) {
          return (
            <li key={id} className={css.item}>
              <p className={css.description}>{name}</p>
              <span className={css.span}>{number}</span>
              <button className={css.button} onClick={() => remove(id)}>
                Delete
              </button>
            </li>
          );
        }
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};
export default ContactList;
