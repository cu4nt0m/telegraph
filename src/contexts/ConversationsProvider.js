import React, { useContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import { useContacts } from './ContactsProvider';

const ConversationsContext = React.createContext();

export const useConversations = () => {
    return useContext(ConversationsContext);
}

export const ConversationsProvider = ({id, children}) => {
    const [conversations, setConversations] = useLocalStorage('conversations', []);
    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
    const { contacts } = useContacts();

    const createNewConversation = (recipients) => {
        setConversations(prevConversations => {
            return [...prevConversations, { recipients, messages: []}];
        });
    };

    const formattedConversations = conversations.map((conversation, index) => {
        const recipients = conversation.recipients.map(recipient => {
            const contact = contacts.find(contact => {
                return contact.id === recipient;
            });
            const name = (contact && contact.name) || recipient;
            return {id: recipient, name};
        });
        const selected = index === selectedConversationIndex
        return {...conversation, recipients, selected }
    })

    const addMessageToConversation = ({ recipients, text, sender }) => {
        
    }

    const sendMessage = () => {
        addMessageToConversation( {recipients, text, sender: id });
    }

    return (
        <div>
            <ConversationsContext.Provider value={{conversations: formattedConversations, createNewConversation
                ,selectConversationIndex: setSelectedConversationIndex
                ,selectedConversation: formattedConversations[selectedConversationIndex]
                ,sendMessage}}>
                {children}
            </ConversationsContext.Provider>
        </div>
    )
}