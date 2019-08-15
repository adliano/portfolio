import React from 'react'
import { Dropdown, Nav, Navbar, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CustomToggle } from '../CustomToggle'

export function MyNavbar() {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand="lg">
        <Navbar.Brand>Adriano Alves</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-links" />
        <Navbar.Collapse id="responsive-links">
          <Nav className="ml-auto">
            <Dropdown>
              <Dropdown.Toggle as={CustomToggle}>
                Contact
            </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Liknedin</Dropdown.Item>
                <Dropdown.Item>Github</Dropdown.Item>
                <Dropdown.Item>adliano@me.com</Dropdown.Item>
                <Dropdown.Item>(510)750-0013</Dropdown.Item>
                <Dropdown.Item>Resume</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link>
              <Link to="/">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/projects">Projects</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}