import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

export function Home() {
  return (
    <>
      <Container>
        <Jumbotron fluid>
          <h1 className="text-center"> My Header here</h1>
        </Jumbotron>
      </Container>
    </>
  )
}