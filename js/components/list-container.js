import React from 'react';
import List from './list';

export class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      cards: []
    };
    this.onAddInputChanged = this.onAddInputChanged.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);
  }

  onAddInputChanged(event) {
    this.setState({
      text: event.target.value
    })
  }

  onAddSubmit(event) {
    event.preventDefault();
    if (this.state.text.length > 0) {
      this.setState({
        cards: [...this.state.cards, this.state.text]
      })
    }
  }

  render() {
    return <List title={this.props.title} cards={this.state.cards} onAddInputChanged={this.onAddInputChanged} onAddSubmit={this.onAddSubmit} />;
  }
}
