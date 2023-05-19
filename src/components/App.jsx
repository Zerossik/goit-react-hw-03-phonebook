import { Component } from 'react';
import { Section } from './Section/Section';
import { PhoneForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate() {
    const { contacts } = this.state;
    console.log('Вызван DidMounth');
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  addContact = contact => {
    const { contacts } = this.state;
    const result = contacts.find(({ name }) => name === contact.name);
    if (result) {
      alert('Rosie Simpson is already in contacts');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handlerChangeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  findByName = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <Section title={'Phonebook'}>
        <PhoneForm addContact={this.addContact} />
        <Filter
          filter={filter}
          handlerChangeFilter={this.handlerChangeFilter}
        />
        <ContactsList
          title={'Contacts'}
          contacts={this.findByName}
          deleteContact={this.deleteContact}
        />
      </Section>
    );
  }
}
