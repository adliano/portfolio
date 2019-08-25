import React from 'react'
import { Card, CardColumns, Container, Jumbotron } from 'react-bootstrap'
import { Bounce, Zoom } from 'react-reveal'

export function Projects () {
  return (
    <>
      <Jumbotron className='bg-transparent text-light' fluid>
        <h1 className='text-center'>List of Projects</h1>
      </Jumbotron>
      <Container className='my-3'>
        <CardColumns>
          <Bounce top cascade>
            {/* ************************************* */}
            {/* ************** 90's Game ************ */}
            {/* ************************************* */}
            <Card>
              <Card.Img variant='top' src='/assets/images/90sgame.gif' />
              <Card.Body>
                <Card.Title>90's Music Word Guess</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            {/* ************************************* */}
            {/* ************** RPG Game ************* */}
            {/* ************************************* */}
            <Card>
              <Card.Img variant='top' src='/assets/images/rpg.gif' />
              <Card.Body>
                <Card.Title>RPG Game</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Bounce>
        </CardColumns>
      </Container>
    </>
  )
}
