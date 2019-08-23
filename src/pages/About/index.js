import React from 'react'
import { Container, Jumbotron, Image, } from 'react-bootstrap'
import './style.css'

export function About () {
  return (
    <>
      <Container className='mt-4 text-light'>
        <Jumbotron className='.jubotron'>
          <h1 className='text-center myName'>Adriano Alves</h1>
        </Jumbotron>
          <div className="text-center" lg={12} md={1}>
          <Image className="w-25 myImage" src="/assets/images/alves.jpeg" roundedCircle/>
          </div>
      </Container>
    </>
  )
}

