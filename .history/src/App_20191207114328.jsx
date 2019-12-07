import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
// import AllEmployees from './pages/AllEmployees'
import Page2 from './pages/AddEmployee'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import AllEmployees from './pages/AllEmployees'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Welcome to my SPA</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Go Home</Link>
            </li>
            <li>
              <Link to="/1">All AllEmployees</Link>
            </li>
            <li>
              <Link to="/2">Page 2</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/1" component={AllEmployees}></Route>
        <Route exact path="/2" component={Page2}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
