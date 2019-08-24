import React from 'react'
import { Card, Container, Jumbotron } from 'react-bootstrap'
import './style.css'

export function About () {
  return (
    <>
      <Container className='mt-4 text-light'>
        <Jumbotron className='bg-transparent'>
        <h1 className='text-center myName'>Adriano Alves</h1>
        </Jumbotron>
        <Card className='bg-transparent text-light'>
          {/* <Card.Img src="https://media.giphy.com/media/1oF1KAEYvmXBMo6uTS/giphy.gif" /> */}
          <Card.ImgOverlay>
            {/* <Card.Title className='myName'>Adriano Alves</Card.Title> */}
            <Card.Text>
              My name is Adriano a computer scientist and mathematics Lover, I’m
              excited to start my career in web development, Looking forward to
              starting using all t he knowledge I gained during these years at
              this highway to shell. I'm certified Android Developer from City
              College of San Francisco with strong knowledge in Java SE, Jave
              EE, MySQL Database Administration, Oracle 12C database
              Administration, Linux System Administration, Linux Network
              Administration,Programming Techniques for XML, Dart, Swift and
              some C++. Current Learning Web development FullStack at Berkeley
              Bootcamp. I am Unix command line lover and strong believe that
              everything it's possible until you stop believing that you can do
              it. I love to learn new things, ride, travel and drink coffee. I
              also l ove to help debug problems, because thats the way i learn
              more.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container>
    </>
  )
}

// {/* <div className="text-center myImage"> */}
// {/* <Image className="w-25" src="/assets/images/alves.jpeg" roundedCircle/> */}
// {/* </div> */}
