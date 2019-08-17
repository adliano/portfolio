import React from 'react'
import { Dropdown, Image, Nav, Navbar, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CustomToggle } from '../CustomToggle'
import './style.css'

export function MyNavbar() {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand="lg">
        <Image className="mr-2" src="./assets/images/alves.jpeg" width='40rem' roundedCircle/>
        <Navbar.Brand>
          Adriano Alves
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-links" />
        <Navbar.Collapse id="responsive-links">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/" className="Link">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/projects" className="Link">Projects</Link>
            </Nav.Link>
            <Dropdown alignRight>
              <Dropdown.Toggle as={CustomToggle}>
                Contact
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="https://www.linkedin.com/in/adliano/">Liknedin</Dropdown.Item>
                <Dropdown.Item href="https://github.com/adliano">Github</Dropdown.Item>
                <Dropdown.Item>adliano@me.com</Dropdown.Item>
                <Dropdown.Item>(510)750-0013</Dropdown.Item>
                <Dropdown.Item>Resume</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}