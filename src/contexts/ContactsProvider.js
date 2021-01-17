import React, { useContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

const contactsContext = React.createContext();

export const useContacts = () => {
    return useContext(contactsContext);
}

export const ContactsProvider = ({children}) => {
    const [contacts, setContacts] = useLocalStorage('contacts', []);

    const createNewContact = (id, name) => {
        setContacts(prevContacts => {
            return [...prevContacts, {id, name}];
        });
    };

    return (
        <div>
            <contactsContext.Provider value={{contacts, createNewContact}}>
                {children}
            </contactsContext.Provider>
        </div>
    )
}



