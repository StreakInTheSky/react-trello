import React from 'react';
import Card from './card'

export default function List(props) {
  const cards = props.cards.map((cardText, index) => {
    return <Card key={index} text={cardText} />
  })

  return (
    <li>
      <h3>{props.title}</h3>
      <ul>
        {cards}
      </ul>
      <form onSubmit={props.onAddSubmit}>
        <input onChange={props.onAddInputChanged}/>
        <button>Add</button>
      </form>
    </li>
  );
}
