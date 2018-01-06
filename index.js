import './styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/main/main'

const rootDiv = document.getElementById('root');

ReactDOM.render(<Greeting name={"erick"} />, rootDiv);