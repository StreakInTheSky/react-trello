import React from 'react';
import TestUtils from 'react-dom/test-utils';
import chai from 'chai';

const should = chai.should();

import Board from '../js/components/board';

describe('Board component', function() {
  it('Renders the board of lists', function() {
    const title = 'Board Title';
    const lists = ['List 1', 'List 2'];

    const renderer = TestUtils.createRenderer();
    renderer.render(<Board title={title} lists={lists} />)
    const results = renderer.getRenderOutput();
    results.type.should.equal('div');

    const boardTitle = results.props.children[0];
    boardTitle.type.should.equal('h1');
    boardTitle.props.children.should.equal(title);

    const listTitles = results.props.children[1];
    listTitles.type.should.equal('ul');
    listTitles.props.children.length.should.equal(lists.length);
    listTitles.props.children[0].props.title.should.equal(lists[0]);
  })
})
