import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Container, Jumbotron } from 'react-bootstrap'
import { MyNavbar } from './components'
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Container>
          <Jumbotron fluid>
            <h1 className="text-center"> My Header here</h1>
          </Jumbotron>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
