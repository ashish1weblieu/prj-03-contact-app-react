import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import BannerCard from "./BannerCard";
import TestimonialCard from "./TestimonialCard";
import VideoframeCard from "./VideoframeCard";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Homefeatures from "./Homefeatures";
import AboutusCard from "./AboutusCard";
import FooterCard from "./FooterCard";

function App() {
  // CONTCT US SECTION
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="row">
      <Header />
      <BannerCard />
      <TestimonialCard />
      <VideoframeCard />
      <Homefeatures />
       <AddContact addContactHandler={addContactHandler} />
      {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      <AboutusCard />
      <FooterCard />
    </div>
  );
}
export default App;
