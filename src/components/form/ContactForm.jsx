import { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../form/ContactForm.module.css';
const shortid = require('shortid');

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  nameID = shortid.generate();
  numberID = shortid.generate();

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  hendleSubmit = event => {
    event.preventDefault();
    this.props.submit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.hendleSubmit}>
        <label className={css.label} htmlFor={this.nameID}>
          Name
        </label>
        <input
          className={css.input}
          type="text"
          name="name"
          id={this.nameID}
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.label} htmlFor={this.numberID}>
          Number
        </label>
        <input
          className={css.input}
          type="tel"
          name="number"
          id={this.numberID}
          value={this.state.number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default ContactForm;
