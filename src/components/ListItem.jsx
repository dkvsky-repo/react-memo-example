import React from 'react';

const ListItem = ({item}) => {  
  console.log('*** listItem render ***');

  return (
    <i>{item.name}</i>
  );
}

export default React.memo(ListItem);