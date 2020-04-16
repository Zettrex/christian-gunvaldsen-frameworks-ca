import React from 'react';
import "../style/style.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import HomePage from "./Home/HomePage";
import ContactPage from "./Contact/ContactPage";
import GameDescPage from "./GameDesc/GameDescPage";
import {Container} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <Router className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <NavLink to="/" excact>
          <Navbar.Brand>JS-FW CA</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" exact className="nav-link">Home</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/contact" component={ContactPage}/>
          <Route path="/game/:id" component={GameDescPage}/>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
