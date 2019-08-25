import React from 'react'
import { Dropdown, Image, Nav, Navbar, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CustomToggle } from '../CustomToggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

export function MyNavbar () {
  return (
    <>
      <Navbar
        collapseOnSelect
        bg='dark'
        variant='dark'
        expand='lg'
        sticky='top'
        className='size'
      >
        <Image
          className='mr-2'
          src='./assets/images/alves.jpeg'
          width='40rem'
          roundedCircle
        />
        <Navbar.Brand>
          <Link className='text-light' to='/'>
            Adriano Alves
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-links' />
        <Navbar.Collapse id='responsive-links'>
          <Nav className='ml-auto'>
            <Nav.Link href='#'>
              <Link to='/about' className='text-light'>
                About
              </Link>
            </Nav.Link>
            <Nav.Link href='#'>
              <Link to='/projects' className='text-light'>
                Projects
              </Link>
            </Nav.Link>
            <Dropdown alignRight>
              <Dropdown.Toggle as={CustomToggle}>
                <span className='text-light'>Contact</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {/* <Dropdown.Item href='https://www.linkedin.com/in/adliano/'>
                  <FontAwesomeIcon icon={['fab', 'linkedin']} /> Liknedin
                </Dropdown.Item> */}
                {/* <Dropdown.Item href='https://github.com/adliano'>
                  <FontAwesomeIcon icon={['fab', 'github-square']} /> Github
                </Dropdown.Item> */}
                <Dropdown.Item>
                  <FontAwesomeIcon icon={['fas', 'at']} /> adliano@me.com
                </Dropdown.Item>
                <Dropdown.Item>
                  <FontAwesomeIcon icon={['fas', 'phone-square-alt']} />
                  (510)750-0013
                </Dropdown.Item>
                <Dropdown.Item>
                  <FontAwesomeIcon icon={['fas', 'file-download']} /> Resume
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
