import React, { useState } from "react";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import ContactForm from "./components/ContactForm/ContactForm";

const generateId = () => `${Date.now()}-${Math.floor(Math.random() * 10000)}`;

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  const addContact = (evt) => {
    evt.preventDefault();
    const name = evt.target.elements.contactName.value.trim();
    const number = evt.target.elements.contactNumber.value.trim();

    const contactExists = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      alert(`${name} is already in contacts.`);
      evt.target.reset();
      return;
    }

    const newContact = { id: generateId(), name, number };
    setContacts((prevContacts) => [...prevContacts, newContact]);
    evt.target.reset();
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const handleFilterChange = (evt) => {
    setFilter(evt.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="mainBox">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter findContact={handleFilterChange} />
      <ContactsList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
