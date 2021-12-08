import React from 'react';

const ListItem = ({item, onRemove}) => {  
  console.log('*** Render: ListItem ***');

  return (
    <li>
      {item.name}
      <button type="button" onClick={() => onRemove(item.id)} className="remove">Remove</button>
    </li>

  );
}

export default React.memo(ListItem);