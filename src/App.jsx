import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import List from  './components/List';

function App() {
  const [ users, setUsers ] = React.useState([
    {id: 'a', name: 'Robin'},
    {id: 'b', name: 'Dennis'},
  ]);
  const [ text, setText ] = React.useState('');

  const handleText = (event) => {
    setText(event.target.value);
  }

  const handleAddUser = () => { 
    setUsers(users.concat({ id: uuidv4(), name: text }));
  }

  const handleRemove = React.useCallback((id) => {
    setUsers(users.filter((user) => user.id !== id));
  },[users]);

  console.log('*** Render: App ***');

  return (
    <React.Fragment>
      <div className="container">
        <input type="text" value={text} onChange={handleText} />
        <button type="button" onClick={handleAddUser}>Add user</button>
      </div>
      <List list={users} onRemove={handleRemove} />
    </React.Fragment>
  );
}

export default App;