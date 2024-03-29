import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import Typing from 'react-typing-animation' 
import './style.css'

export function About () {
  return (
    <>
      <Container className='m-5 mx-auto'>
        <div className='m-5 mx-auto box'>
          <Fade duration={500}>
            <Image src='/assets/images/screen_about.png' className='laptop' fluid />
          </Fade>
          <div className='text-white greeting bg-dark px-3 pt-3'>
            <Typing startDelay={1000} speed={5}>
              <h4>
                Hi I'm Adriano.
                <br />
                <Typing.Delay ms={1500} />A full-stack web developer, computer
                scientist and a mathematics lover.
              </h4>
            </Typing>
            <div>
              <Typing startDelay={8000} speed={1}>
                <div className='myText'>
                  <h6>
                    I’m excited to start my career in web development, Looking
                    forward to starting using all the knowledge I gained during
                    these years.
                  </h6>
                  <h6>
                    I'm certified in Android development at City College of San
                    Francisco and Web development FullStack at Berkeley with
                    strong knowledge in Java SE, Jave EE, MySQL Database
                    Administration, Oracle 12C database Administration, Linux
                    System Administration, Linux Network Administration,
                    Programming Techniques for XML, Dart, Swift and some C++. I
                    am an Unix command line lover and strong believe that
                    everything it's possible until you stop believing that you
                    can do it. I love to learn new things, ride, travel and
                    drink coffee. I also love to help debug problems, because
                    thats the way i learn more.
                  </h6>
                </div>
              </Typing>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

/*
 I’m excited to start my career in web development, Looking forward to
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
*/

/*
<Card className='bg-transparent text-light'>
          <Card.Img className='p-0 m-0' src='/assets/images/screen_about.png' />
          <Card.ImgOverlay>
            <Card.Title className='myName'>Adriano Alves</Card.Title>
            <Card.Text className='text-center w-100 m-5'>
              My name is Adriano a computer scientist and mathematics Lover.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
*/
