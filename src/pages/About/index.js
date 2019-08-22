import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

export function About() {
  return (
    <>
      <Container className='my-3'>
        <Jumbotron fluid>
          <h1 className="text-center">About me</h1>
        </Jumbotron>
      </Container>
    </>
  )
}