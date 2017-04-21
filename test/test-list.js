import React from 'react';
import TestUtils from 'react-dom/test-utils';
import chai from 'chai';

const should = chai.should();

import List from '../js/components/list';

describe('List component', function() {
  it('Renders the list of cards', function() {
    const title = 'List Title';
    const cards = ['Example 1', 'Example 2'];

    const renderer = TestUtils.createRenderer();
    renderer.render(<List title={title} cards={cards} />);
    const results = renderer.getRenderOutput();

    const listTitle = results.props.children[0];
    listTitle.type.should.equal('h3');
    listTitle.props.children.should.equal(title);

    const cardList = results.props.children[1];
    cardList.type.should.equal('ul');
    cardList.props.children.length.should.equal(cards.length);
    cardList.props.children[0].props.text.should.equal(cards[0]);
  })
  // Need tests for events
})
