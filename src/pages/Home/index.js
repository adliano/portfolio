import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import './style.css'

export function Home() {
  return (
    <div className="bgImage">
      <Container className='my-3'>
        <Jumbotron fluid className='text-light'>
          <h1 className="text-center header">Let's Build Something</h1>
        </Jumbotron>
      </Container>
    </div>
  )
}