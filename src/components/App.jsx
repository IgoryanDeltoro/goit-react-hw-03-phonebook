import { Component } from 'react';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import ContactForm from './form/ContactForm';
import uniqid from 'uniqid';
import css from './App.module.css';
import Header from './header/Header';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem('contacts'));
    if (storage) {
      this.setState(() => ({
        contacts: [...storage],
      }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    const prevContacts = prevState.contacts;
    if (contacts.length !== prevContacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = ({ name, number }) => {
    const ID = uniqid.process();
    const string = this.state.contacts.filter(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    string.length !== 0
      ? this.hendleCoincidence(name)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, { id: ID, name, number }],
        }));
  };

  hendleCoincidence(name) {
    alert(`${name} is already in contacts`);
  }

  hendleSearch = event => {
    const value = event.currentTarget.value.toLowerCase().trim();
    this.setState({ filter: value });
  };

  hendeleClickDelete = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <>
        <Header title={'Phonebook'} />
        <div className={css.container}>
          <ContactForm submit={this.handleSubmit} contacts={this.contacts} />
          <h2 className={css.title}>Contacts</h2>
          <Filter filter={this.hendleSearch} />
          <ContactList
            contacts={contacts}
            filter={filter}
            remove={this.hendeleClickDelete}
          />
        </div>
      </>
    );
  }
}

export default App;
