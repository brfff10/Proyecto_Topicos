import React, { Component } from 'react';
import logo from './medical (1).svg';
import './App.css';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

class App extends Component {
  render() {
      return <div className="App">
          <Navbar>
              <Navbar.Header>
              <Navbar.Brand>
                  <a href=""> Medical Database </a>
              </Navbar.Brand>
              </Navbar.Header>
              <Nav>
              <NavItem eventKey={1} href="#"> Tab 1 </NavItem>
              <NavItem eventKey={2} href="#"> Tab 2 </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}> My Profile </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.2}> My Patients </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}> Requests </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.4}> Separate Link </MenuItem>
              </NavDropdown>
              </Nav>
          </Navbar>
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <h1 className="App-title"> Welcome to the HIV / Tuberculosis Patient Database </h1>
          </header>
          <p className="App-intro">
              Mea ludus minimum interpretaris ut, vel ei quem percipitur dissentias. Vel deserunt ullamcorper ut,
              has admodum civibus repudiandae id. Electram theophrastus pro ad, ut solet mediocrem pro, mel nullam
              mollis ea. Sit ullum everti sanctus ad. Impedit pericula at ius, ei vis omnium disputationi. Wisi
              definiebas reprehendunt vel te.
          </p>
      </div>;
  }
}

export default App;
