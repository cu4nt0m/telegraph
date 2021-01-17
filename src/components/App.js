import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Login from './Login';
import Dashbord from './Dashbord';
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ConversationsProvider } from '../contexts/ConversationsProvider';

function App() {
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider id={id}>
        <Dashbord id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  )

  return (
    <>
      {id ? dashboard : <Login onIdSubmit={setId}/>}
    </>
  );
}

export default App;
