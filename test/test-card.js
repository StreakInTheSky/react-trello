import React from 'react';
import TestUtils from 'react-dom/test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';

describe('Card components', function() {
  it('Renders the card text', function() {
    const text = "Example text";

    const renderer = TestUtils.createRenderer();
    renderer.render(<Card text={text} />);
    const results = renderer.getRenderOutput();
    results.props.children.should.equal(text);
  })
})
