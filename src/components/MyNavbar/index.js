import React from 'react'
import { Dropdown, Nav, Navbar, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CustomToggle } from '../CustomToggle'
import Avatar from '@atlaskit/avatar';
import './style.css'

export function MyNavbar() {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand="lg">
        <Navbar.Brand>
        <Avatar name="large" size="large" />
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
                <Dropdown.Item>Liknedin</Dropdown.Item>
                <Dropdown.Item>Github</Dropdown.Item>
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