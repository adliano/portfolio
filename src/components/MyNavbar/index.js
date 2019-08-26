import React from 'react'
import { Dropdown, Image, Nav, Navbar, OverlayTrigger, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CustomToggle } from '../CustomToggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import copy from 'clipboard-copy'

import './style.css'

export function MyNavbar() {
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
                <OverlayTrigger
                  placement='left'
                  overlay={<div className='text-light mr-3'>click to copy</div>}>
                     <Dropdown.Item onClick={() => copy('adliano@me.com')}>
                       <FontAwesomeIcon icon={['fas', 'at']} /> adliano@me.com
                    </Dropdown.Item>
                </OverlayTrigger>
                <OverlayTrigger
                placement='left'
                overlay={<div className='text-light mr-3'>click to copy</div>}>
                <Dropdown.Item onClick={() => copy('+1(510)750-0013')}>
                  <FontAwesomeIcon icon={['fas', 'phone-square-alt']} />
                  (510)750-0013
                </Dropdown.Item>
                </OverlayTrigger>
                <Dropdown.Item href='https://drive.google.com/file/d/18TkYIXYUsY2scnUlwJTFY0YEErulBZcN/view?ths=true' >
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

/*
<OverlayTrigger
      placement='left'
      overlay={
        <Tooltip className='text-light'>
          Tooltip on <strong>left</strong>.
        </Tooltip>
      }
    >
    <Dropdown.Item onClick={() => copy('adliano@me.com')}>
                  <FontAwesomeIcon icon={['fas', 'at']} /> adliano@me.com
                </Dropdown.Item>
    </OverlayTrigger>
*/