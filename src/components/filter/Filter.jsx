import PropTypes from 'prop-types';
import css from '../filter/Filter.module.css';
const shortid = require('shortid');

const Filter = ({ filter }) => {
  const filterID = shortid.generate();

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={filterID}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        name="name"
        id={filterID}
        onChange={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};
Filter.propTypes = {
  filter: PropTypes.func.isRequired,
};
export default Filter;
