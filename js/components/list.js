import React from 'react';
import Card from './card'

export default function List(props) {
  const cards = props.cards.map((cardText, index) => {
    return <Card key={index} text={cardText} />
  })

  let textInput = null;

  function onAddSubmit(event) {

    textInput.value = '';
    props.onAddSubmit(event);
  }

  return (
    <li>
      <h3>{props.title}</h3>
      <ul>
        {cards}
      </ul>
      <form onSubmit={onAddSubmit}>
        <input ref={input => { textInput = input }} onChange={props.onAddInputChanged}/>
        <button>Add</button>
      </form>
    </li>
  );
}
