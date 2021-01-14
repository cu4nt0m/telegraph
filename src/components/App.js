import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Login from './Login';
import Dashbord from './Dashbord';

function App() {

  const [id, setId] = useLocalStorage('id')
  return (
    <>
      {id ? <Dashbord id={id}/> : <Login onIdSubmit={setId}/>}
    </>
  );
}

export default App;
