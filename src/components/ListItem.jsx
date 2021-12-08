import React from 'react';

const ListItem = ({item}) => {  
  console.log('*** Render: ListItem ***');

  return (
    <li>
      {item.name}
    </li>

  );
}

export default ListItem;