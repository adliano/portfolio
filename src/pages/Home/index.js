import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import './style.css'

export function Home () {
  return (
    <>
      <Zoom>
        <div className='bgImage'>
          <Container className='my-3'>
            <Jumbotron fluid className='text-light'>
              <h1 className='text-center header'>
                <Zoom right cascade>
                  Let's Build Something
                </Zoom>
              </h1>
            </Jumbotron>
            {/* <h1>&lt;/&gt;</h1> */}
          </Container>
        </div>
      </Zoom>
    </>
  )
}
