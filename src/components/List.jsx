import React from 'react';
import ListItem from './ListItem';

const List = ({list}) => {
  console.log('*** Render: List ***');
  
  return (
    <ul>
      {list.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default List;