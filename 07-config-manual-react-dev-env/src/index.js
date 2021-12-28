import React from 'react';
import { render } from 'react-dom';
import { App } from './components';

const rootNode = document.querySelector('#root');

render(<App />, rootNode);
