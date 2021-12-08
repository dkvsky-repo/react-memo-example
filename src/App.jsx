import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import './App.css';
import List from  './components/List';

const users = [
    {id: 'a', name: 'Robin'},
    {id: 'b', name: 'Dennis'},
  ];

function App() {
  const [ text, setText ] = React.useState('');
  const [ search, setSearch ] = React.useState('');

  const handleText = (event) => {
    setText(event.target.value);
  }

  const handleSearch = () => {
    setSearch(text);
  }

  // @todo: useMemo demo works, but method needs debugging
  const filteredUsers = React.useMemo(
    () =>
    users.filter((user) => {
    console.log('filteredUsers fn is running...')
    return user.name.toLowerCase().includes(search.toLowerCase());
  }), [search]);

  console.log('*** Render: App ***');

  return (
    <React.Fragment>
      <div className="container">
        <input type="text" value={text} onChange={handleText} />
        <button type="button" onClick={handleSearch}>Search</button>
      </div>
      <List list={users} />
    </React.Fragment>
  );
}

export default App;