import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  createContact = data => {
    const checkNewContact = this.state.contacts.find(({name})=>name===data.name);
    if (checkNewContact){
      return alert (`${data.name} is already in contacts`)
    };
    const newContact = {
      id: nanoid(),
      ...data,
    };

    this.setState(({contacts})=>({
      contacts: [...contacts, newContact]
    }));
  };

  handleDelete = (id) => {
    this.setState((prev)=>({
      contacts: prev.contacts.filter((contact)=>contact.id!==id),
    }))
  };

  filterContacts = (e) =>{
    this.setState({filter: e.currentTarget.value.toLowerCase()});
  }

  render() {
    const {contacts, filter}=this.state;
    const filteredContacts = contacts.filter(contact=>contact.name.toLowerCase().includes(this.state.filter));

    return (
      <div
        style={{
          // height: '100vh',
          fontSize: 20,
          color: '#010101',
          margin: 30,
        }}
      >
        <h2>Phonebook</h2>
        <ContactForm createContact={this.createContact} />

        <h2>Contacts</h2>

        <Filter onChange={this.filterContacts} value = {filter} />
        <ContactList handleDelete= {this.handleDelete} contactsList = {filteredContacts} />
      </div>
    );
  }
};
