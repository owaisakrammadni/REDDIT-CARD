import './App.css';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom'
import Login from './components/login/login'
import Signup from './components/signup/signup'
import Dashboard from './components/dashboard/dashboard'
function App() {
  return(

    <div className='nav'>
    <Router>
      <nav className="navbar">
        <ul>
          <li>
            <Link to='/'>Login</Link>
          </li>
          <li>
            <Link to='/signup'>signup</Link>
          </li>
          <li>
            <Link to='/dashboard'>dasboard</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/'>
          <Login />
          </Route>
        <Route exact path='/signup'>
          <Signup />
          </Route>
        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
    </div>
  )
}

export default App;
