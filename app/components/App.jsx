import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import browserHistory from 'react-router' 
import Register from './register.jsx'
import Registered from './registered.jsx'

const App = () => (
  <Router history = {browserHistory}>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/registered_entries">Registered Entries</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/register" component={Register}/>
      <Route path="/registered_entries" component={Registered}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

export default App