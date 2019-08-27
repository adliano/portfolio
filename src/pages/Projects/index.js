import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import { ProjectCard } from '../../components/ProjectCard'
import './style.css'

export function Projects () {
  return (
    <div>
      <Jumbotron className='bg-transparent text-light' fluid>
        <h1 className='text-center'>List of Projects</h1>
      </Jumbotron>
      <Container>
        {/* <CardColumns className='mx-auto px-5 text-center'> */}
          {/* <Zoom bottom cascade> */}
            <ProjectCard>
              
            </ProjectCard>
          {/* </Zoom> */}
        {/* </CardColumns> */}
      </Container>
    </div>
  )
}
