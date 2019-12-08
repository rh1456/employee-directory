import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
// import AllEmployees from './pages/AllEmployees'
import AddEmployee from './pages/AddEmployee'
import HomePage from './pages/HomePage'
import SingleEmployee from './pages/SingleEmployee'
import AllEmployees from './pages/AllEmployees'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Employee Data</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Go Home</Link>
            </li>
            <li>
              <Link to="/1">All AllEmployees</Link>
            </li>
            <li>
              <Link to="/2">AddEmployee</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/1" component={AllEmployees}></Route>
        <Route exact path="/2" component={AddEmployee}></Route>
        <Route path="/employee/:id" component={SingleEmployee}></Route>
      </Switch>
    </Router>
  )
}

export default App

// <main className="all-employees">
// {employeeData.map((info, i) => {
//   return (
//     <div className="employee-info">
//       <div className="empolyee-sect" key={i}>
//         <div className="employee-data">
//           <img className="employee-pic" src={info.profileImage} />
//           <h2 className="employee-full-name">
//             {info.firstName} {info.lastName}
//           </h2>
//           <h3 className="job">{info.jobTitle}</h3>
//           <h3 className="full-time">
//             Full Time: {info.isFullTime ? 'Yes' : 'No'}
//           </h3>
//         </div>
//       </div>
//     </div>
//   )
// })}
