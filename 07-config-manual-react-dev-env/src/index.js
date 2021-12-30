import React from 'react';
import { render } from 'react-dom';
import { RandomCountUpContainer } from './container/RandomCountUpContainer/RandomCountUpContainer';

const rootNode = document.querySelector('#root');

render(<RandomCountUpContainer />, rootNode);
