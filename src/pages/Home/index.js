import React from 'react'
import { Container, Jumbotron, Image } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import './style.css'

export function Home () {
  return (
    <>
      <Zoom>
        <div>
          <Container className='my-3'>
            <Jumbotron fluid className='text-light bg-transparent'>
              <h1 className='text-center header'>
                <Zoom right cascade>
                  Let's Build Something
                </Zoom>
              </h1>
            </Jumbotron>
          </Container>
        </div>
      </Zoom>
      <Image src='/assets/images/sticker.png' className='mx-auto w-25 d-block my-img'/>
    </>
  )
}
