import React from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import { ProjectCard } from '../../components/ProjectCard'
import './style.css'

export function Projects () {
  return (
    <div>
      <Jumbotron className='bg-transparent text-light' fluid>
        <h1 className='text-center header'>List of Projects</h1>
      </Jumbotron>
      <Container>
        <Row className='mx-auto'>
          <Zoom bottom cascade>
            <Col sm>
              <ProjectCard image='assets/images/petinder.png' title='The Petinder' github='https://github.com/adliano/thepetinder_react' webpage='http://www.thepetinder.com'>
              Animals and Universal Consciouness.
              Helping Animals to get a new home
              </ProjectCard>
            </Col>
            <Col sm>
              <ProjectCard
                image='assets/images/90s.png'
                title="90's Word Guessing"
                github='https://github.com/adliano/WordGuessGame'
                webpage='https://adliano.github.io/WordGuessGame/'
              >
                A Word Guess game with some nice 90's dance musics
              </ProjectCard>
            </Col>
            <Col sm>
              <ProjectCard
                image='assets/images/sw.png'
                title='RPG Game'
                github='https://github.com/adliano/unit-4-game'
                webpage='https://adliano.github.io/unit-4-game/'
              >
                A RPG Game with some Start Wars characters
                <br />
                <strong>"May the Source Be with You"</strong>
              </ProjectCard>
            </Col>
            <Col sm>
              <ProjectCard
                image='assets/images/gif.png'
                title='Giftastic'
                github='https://github.com/adliano/GifTastic'
                webpage='https://adliano.github.io/GifTastic/'
              >
                A Simple Search for any GIF
              </ProjectCard>
            </Col>
            <Col sm>
              <ProjectCard
                image='assets/images/smartTrivia.png'
                title='Smart Trivia'
                github='https://github.com/adliano/TriviaSmart'
                webpage='https://adliano.github.io/TriviaSmart/'
              >
                Smart Trivia, A trivia Game to test your knowledge
              </ProjectCard>
            </Col>
            <Col sm>
              <ProjectCard
                image='assets/images/bamazon.png'
                title='Bamazon'
                github='https://github.com/adliano/Bamazon'
              >
                A nice Mock CLI Application that manages product sales
              </ProjectCard>
            </Col>
            <Col sm />
            <Col sm>
              <ProjectCard
                image='assets/images/ff.png'
                title='Friend Finder'
                github='https://github.com/adliano/FriendFinder'
                webpage='https://github.com/adliano/FriendFinder'
              >
                Because we want help you to find a friend
              </ProjectCard>
            </Col>
          </Zoom>
        </Row>
      </Container>
    </div>
  )
}

/*
<Col sm>
              <ProjectCard
              image=''
              title=''
              github=''
              webpage=''
              >
                Text
              </ProjectCard>
            </Col>
*/
