import React from 'react'
import { Card, CardColumns, Container, Jumbotron } from 'react-bootstrap'
import { Bounce, } from 'react-reveal'

export function Projects () {
  return (
    <>
      <Jumbotron className='bg-transparent text-light' fluid>
        <h1 className='text-center'>List of Projects</h1>
      </Jumbotron>
      <Container className='px-5 mx-auto' >
        <CardColumns className='mx-auto px-5 text-center' >
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
            {/* ************************************* */}
            {/* ************ Smart Trivia *********** */}
            {/* ************************************* */}
            <Card className='bg-secondary text-light'>
              <Card.Img className='p-1 bg-light' variant='top' src='/assets/images/smart_trivia.gif' />
              <Card.Body>
                <Card.Title className='bg-white text-dark'>Trivia Smart</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            {/* ************************************* */}
            {/* ************* Giftastic ************* */}
            {/* ************************************* */}
            <Card>
              <Card.Img variant='top' src='http://www.alves.tech/assets/images/giftastic.jpg' />
              <Card.Body>
                <Card.Title>Giftastic</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            {/* ************************************* */}
            {/* ************* Bamazon ************* */}
            {/* ************************************* */}
            <Card>
              <Card.Img variant='top' src='http://www.alves.tech/assets/images/bamazon.gif' />
              <Card.Body>
                <Card.Title>Bamazon</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            {/* ************************************* */}
            {/* *********** Friend Finder *********** */}
            {/* ************************************* */}
            <Card>
              <Card.Img variant='top' src='http://www.alves.tech/assets/images/friendFinder.png' />
              <Card.Body>
                <Card.Title>Friend Finder</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            {/* ************************************* */}
            {/* ************** Petinder ************* */}
            {/* ************************************* */}
            <Card>
              <Card.Img variant='top' src='http://www.alves.tech/assets/images/petinder.png' />
              <Card.Body>
                <Card.Title>Petinder</Card.Title>
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
