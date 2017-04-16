import React from 'react';
import {ListContainer, List} from './list-container';

export default function Board(props) {

  const lists = props.lists.map((listTitle, index) => {
    return <ListContainer key={index} title={listTitle} />
  })

  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        {lists}
      </ul>
    </div>
  );
}
