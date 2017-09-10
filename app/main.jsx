import React from 'react';
import { ReactDOM, render } from 'react-dom';
import {Router, Route, browserHistory} from 'react-router-dom';
import App from './components/App';
import Alert from 'react-s-alert';

render(
	<div><App/><Alert stack={true} /></div>,
	document.getElementById('container')
);
 

