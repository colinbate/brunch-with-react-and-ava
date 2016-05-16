import test from 'ava';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import App from './App.jsx';

test('Renders a welcome message', t => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<App />);
  const out = renderer.getRenderOutput();
  const h2 = out.props.children[1];
  t.is(h2.props.children, 'Welcome!');
});