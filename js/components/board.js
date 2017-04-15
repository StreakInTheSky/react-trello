  import React from 'react';
import List from './list';

export default function Board(props) {
  const cards = ["card1", "card2", "card3"];

  function onAddInputChanged(event) {
    console.log(event.target.value);
  }

  function onAddSubmit(event) {
    event.preventDefault();
    console.log("form submitted");
  }

  const lists = props.lists.map((listTitle, index) => {
    return <List key={index} title={listTitle} cards={cards} onAddInputChanged={onAddInputChanged} onAddSubmit={onAddSubmit} />
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
