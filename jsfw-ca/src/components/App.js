import React from 'react';
import '../style/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


function App() {
  return (
    <Router className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/contact" component={ContactPage}/>
          <Route path="/game/:id" component={GameDPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
