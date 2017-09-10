import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import browserHistory from 'react-router' 
import Register from './register'
import Registered from './registered'
import Verify from './verify'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/registered_entries">Registered Entries</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/register" component={Register}/>
      <Route path="/verify" component={Verify}/>
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