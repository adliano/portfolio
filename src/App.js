import React from 'react';
import { Container, Dropdown, Nav, NavDropdown, Navbar, Jumbotron } from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <>
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand>Adriano Alves</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-links"/>
      <Navbar.Collapse id="responsive-links">
        <Nav className="ml-auto">
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Projects</Nav.Link>
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle}>
              Contact
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item eventKey="1">Red</Dropdown.Item>
            <Dropdown.Item eventKey="2">Red</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Container>
      <Jumbotron fluid>
        <h1 className="text-center"> My Header here</h1>
      </Jumbotron>
    </Container>
    </>
    
  );
}


//////////////////////////// TODO: MOVE TO ANOTHER FILE ///////////////////////////////////
class CustomToggle extends React.Component {
  /**
   * handleClick()
   */
  handleClick = (e) => {
    e.preventDefault();
    this.props.onClick(e);
  }
  /**
   * Render
   */
  render() {
    return (
      <Nav onClick={this.handleClick}>
        <Nav.Link>
        {this.props.children}
        </Nav.Link>
      </Nav>
    );
  }
}
///////////////////////////////////////////////////////////////////////////////////////

export default App;
