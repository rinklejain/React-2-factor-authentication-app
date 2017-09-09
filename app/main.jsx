import React from 'react';
import { ReactDOM, render } from 'react-dom';
import {Router, Route, browserHistory} from 'react-router-dom';
import App from './components/App';
import createBrowserHistory from 'history/createBrowserHistory'

const newHistory = createBrowserHistory();

render(<div><App/></div>, document.getElementById('container'));
 

